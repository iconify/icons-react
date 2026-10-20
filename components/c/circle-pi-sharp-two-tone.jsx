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
		"content": `<style>.mlz27bc9p {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M22 12C22 17.5228 17.5228 22 12 22C6.4772 22 2 17.5228 2 12C2 6.4772 6.4772 2 12 2C17.5228 2 22 6.4772 22 12ZM6.5 8.5L17.5 8.5M10 8.5L10 16M14 8.5L14 14C14 14.8285 14.6716 15.5 15.5 15.5L16 15.5");
}
</style><path class="mlz27bc9p"/>`,
		"fallback": "keyline-icons:circle-pi-sharp-two-tone",
	});
}

export default Component;
