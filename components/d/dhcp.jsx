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
		"content": `<style>.u1cho7bpw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 6.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0ZM12 10v6m-7.25 0v-2.5h14.5V16M2.5 16H7v4.5H2.5Zm7.25 0h4.5v4.5h-4.5ZM17 16h4.5v4.5H17Z");
}
</style><path class="u1cho7bpw"/>`,
		"fallback": "uix-sharp:dhcp",
	});
}

export default Component;
