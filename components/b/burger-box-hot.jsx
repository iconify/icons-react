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
		"content": `<style>.ie2ulznqj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 17L4.4971 20.743C4.8008 21.502 5.5363 22 6.3541 22H17.6459C18.4637 22 19.1992 21.502 19.5029 20.743L21 17M3 17H2M3 17L4.6213 10.515C4.8439 9.625 5.6438 9 6.5616 9H17.4384C18.3562 9 19.1561 9.625 19.3787 10.515L21 17M3 17H9M21 17H22M21 17H15M9 17V15C9 13.895 9.8954 13 11 13H13C14.1046 13 15 13.895 15 15V17M9 17H15M7.7913 2C7.7913 2.787 7.4208 3.528 6.7913 4C6.4409 4.263 6.1707 4.609 6 5M12.7913 2C12.7913 2.787 12.4208 3.528 11.7913 4C11.4408 4.263 11.1707 4.609 11 5M17.7913 2C17.7913 2.787 17.4208 3.528 16.7913 4C16.4408 4.263 16.1707 4.609 16 5");
}
</style><path class="ie2ulznqj"/>`,
		"fallback": "keyline-icons:burger-box-hot",
	});
}

export default Component;
