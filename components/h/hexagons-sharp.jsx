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
		"content": `<style>.faqvqrbtg {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 12.7623L10 15.0717L10 19.6905L6 22L2 19.6905L2 15.0717L6 12.7623ZM18 12.7623L22 15.0717L22 19.6905L18 22L14 19.6905L14 15.0717L18 12.7623ZM12 2L16 4.3095L16 8.9283L12 11.2377L8 8.9283L8 4.3095L12 2Z");
}
</style><path class="faqvqrbtg"/>`,
		"fallback": "keyline-icons:hexagons-sharp",
	});
}

export default Component;
