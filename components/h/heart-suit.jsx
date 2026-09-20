import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wvyw_rbfl {
  fill: var(--svg-color--be1931, #be1931);
  d: path("M2.067 11.319C2.067 2.521 14.251-.74 18 9.445C21.749-.741 33.933 2.52 33.933 11.319C33.933 20.879 18 33 18 33S2.067 20.879 2.067 11.319");
}
</style><path class="wvyw_rbfl"/>`,
		"fallback": "twemoji:heart-suit",
	});
}

export default Component;
