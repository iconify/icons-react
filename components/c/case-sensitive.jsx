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
		"content": `<style>.gu5e9zo7t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 19L7 5L12 19M3.7857 14L10.2143 14M22 16C22 17.6569 20.6569 19 19 19C17.3431 19 16 17.6569 16 16C16 14.3431 17.3431 13 19 13C20.6569 13 22 14.3431 22 16ZM22 12L22 19");
}
</style><path class="gu5e9zo7t"/>`,
		"fallback": "keyline-icons:case-sensitive",
	});
}

export default Component;
