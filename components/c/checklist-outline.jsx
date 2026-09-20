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
		"content": `<style>.rvis35quz {
  fill: currentColor;
  d: path("M5.839 17.904L3 15.066l.689-.689l2.125 2.125l4.25-4.25l.688.714zm0-7.231L3 7.835l.689-.689l2.125 2.125l4.25-4.25l.688.714zm7.18 5.442v-1h8v1zm0-7.23v-1h8v1z");
}
</style><path class="rvis35quz"/>`,
		"fallback": "material-symbols-light:checklist-outline",
	});
}

export default Component;
