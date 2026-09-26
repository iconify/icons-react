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
		"content": `<style>.sg_yow_vr {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 19L18 19C20.2091 19 22 17.2091 22 15C22 12.7909 20.2091 11 18 11C18 7.6863 15.3137 5 12 5C8.6863 5 6 7.6863 6 11C3.7909 11 2 12.7909 2 15C2 17.2091 3.7909 19 6 19ZM9.7626 10.2626L14.2374 14.7374M14.2374 10.2626L9.7626 14.7374");
}
</style><path class="sg_yow_vr"/>`,
		"fallback": "keyline-icons:cloud-x-sharp",
	});
}

export default Component;
