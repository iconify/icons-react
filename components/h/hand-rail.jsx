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
		"content": `<style>.jd96mpbyj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 21.25h4.5v-4.5h4.5v-4.5h4.5v-4.5h5m-14 4v5m4.5-9.5v5m-7.5 2.5l12-12");
}
</style><path class="jd96mpbyj"/>`,
		"fallback": "iconoven:hand-rail",
	});
}

export default Component;
