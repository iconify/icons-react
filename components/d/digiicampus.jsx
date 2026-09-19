import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qcb72hb_s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 7.5v33a2 2 0 0 0 2 2h16.057c10.031 0 18.575-7.8 18.931-17.825C42.862 14.15 34.441 5.5 24 5.5H7.5a2 2 0 0 0-2 2");
}
</style><path class="qcb72hb_s"/>`,
		"fallback": "arcticons:digiicampus",
	});
}

export default Component;
