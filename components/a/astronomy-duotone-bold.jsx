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
		"content": `<style>.arox4o3qw {
  d: path("m5 12 8 -8 4 4 -8 8Z");
}

.dstagacts {
  fill: currentColor;
  d: path("m5 12 8 -8 4 4 -8 8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.gv5aqrbwu {
  d: path("M7 21h8");
}

.ik6mh31gy {
  d: path("M11 14v7");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="dstagacts"/><path class="arox4o3qw"/><path class="ik6mh31gy"/><path class="gv5aqrbwu"/></g>`,
		"fallback": "iconmind:astronomy-duotone-bold",
	});
}

export default Component;
