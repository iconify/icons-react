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
		"content": `<style>.qlf7-7btx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 18.001L3.7857 13.001L6.0583 6.668C6.3743 5.783 7.6257 5.783 7.9417 6.668L10.2143 13.001L12 18.001M10.2143 13.001H3.7857M22 15.001C22 16.658 20.6569 18.001 19 18.001C17.3431 18.001 16 16.658 16 15.001C16 13.344 17.3431 12.001 19 12.001C20.6569 12.001 22 13.344 22 15.001ZM22 15.001V11.001M22 15.001V18.001");
}
</style><path class="qlf7-7btx"/>`,
		"fallback": "keyline-icons:case-sensitive-two-tone",
	});
}

export default Component;
