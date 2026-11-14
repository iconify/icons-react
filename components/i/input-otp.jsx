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
		"content": `<style>.b16xpdbsy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8H7v8H2.5Zm7.25 0h4.5v8h-4.5ZM17 8h4.5v8H17ZM4.75 12h.01M12 12h.01m7.24 0h.01");
}
</style><path class="b16xpdbsy"/>`,
		"fallback": "uix-sharp:input-otp",
	});
}

export default Component;
