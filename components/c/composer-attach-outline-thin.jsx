import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gd2yi5bin {
  d: path("M13.5 4a2 2 0 0 1 2 -2H18a2 2 0 0 1 2 2v2.5a2 2 0 0 1 -2 2h-2.5a2 2 0 0 1 -2 -2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ktxjg3b2q {
  d: path("M6 14v4");
}

.wbwmlebvk {
  d: path("M2 13.5a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="wbwmlebvk"/><path class="ktxjg3b2q"/><path class="gd2yi5bin"/></g>`,
		"fallback": "iconmind:composer-attach-outline-thin",
	});
}

export default Component;
