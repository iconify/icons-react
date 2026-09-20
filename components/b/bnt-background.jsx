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
		"content": `<style>.epfwjmbnt {
  fill: var(--svg-color--fff, #fff);
  d: path("M11.56 4L7.838 6.182l3.722 2.182l3.788-2.182zm.67 11.635V20l5.042-2.882v-4.365zm3.667-8.086v4.364l-3.668 2.182V9.731zm-9.169 4.364l4.126 2.182V9.731L6.728 7.55zm0 5.904L10.854 20v-4.373l-4.126-2.174z");
}

.ft5dv1b6b {
  fill: none;
}

.mumfproca {
  fill: var(--svg-color--000, #000);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="mumfproca"/><path class="epfwjmbnt"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:bnt-background",
	});
}

export default Component;
