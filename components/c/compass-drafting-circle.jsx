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
		"content": `<style>.dmpb6dl5m {
  d: path("M3.75 17.5a14.5 14.5 0 0 0 16.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wxbj5ub4p {
  d: path("M10.5 4.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.z0pnk883i {
  d: path("M6.5 19L12 6l5.5 13");
}
</style><g class="hntgybcog"><path class="wxbj5ub4p"/><path class="z0pnk883i"/><path class="dmpb6dl5m"/></g>`,
		"fallback": "uix:compass-drafting-circle",
	});
}

export default Component;
