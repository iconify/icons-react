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
		"content": `<style>.dh-xp411l {
  cx: 12px;
  cy: 9.5px;
  r: 6.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xe6w-fs3d {
  d: path("M12 6.25V9.5l2 1.25m-10.25 7.5v3m16.5-3v3m-16.5-1.5h16.5");
}
</style><g class="hntgybcog"><circle class="dh-xp411l"/><path class="xe6w-fs3d"/></g>`,
		"fallback": "iconoven:duration",
	});
}

export default Component;
