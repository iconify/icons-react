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
		"content": `<style>.j_z0wfavl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 2.5v19m8-19v19m-8-15h8m-8 5.5h8m-8 5.5h8m6-14v17M16 6l2.5-2.5L21 6m-5 12l2.5 2.5L21 18");
}
</style><path class="j_z0wfavl"/>`,
		"fallback": "uix:extension-ladder",
	});
}

export default Component;
