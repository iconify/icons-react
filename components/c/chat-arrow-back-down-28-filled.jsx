import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lz-rhkyop {
  fill: currentColor;
  d: path("M2 14C2 7.373 7.373 2 14 2s12 5.373 12 12q0 .672-.072 1.324a7.5 7.5 0 1 0-10.604 10.604A12 12 0 0 1 14 26a11.95 11.95 0 0 1-5.637-1.404l-4.77 1.357a1.25 1.25 0 0 1-1.544-1.544l1.356-4.77A11.95 11.95 0 0 1 2 14m25 6.5a6.5 6.5 0 1 0-13 0a6.5 6.5 0 0 0 13 0m-8.146 2.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .708.708L17.707 21h2.543A2.75 2.75 0 0 0 23 18.25V18a.5.5 0 0 1 1 0v.25A3.75 3.75 0 0 1 20.25 22h-2.543z");
}
</style><path class="lz-rhkyop"/>`,
		"fallback": "fluent:chat-arrow-back-down-28-filled",
	});
}

export default Component;
