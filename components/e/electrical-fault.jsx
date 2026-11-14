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
		"content": `<style>.b7rqk9bpn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 8h14v4.5a5 5 0 0 1-5 5h-4a5 5 0 0 1-5-5Zm2-5.5V8m10-5.5V8m-5 9.5v4m1.5-19l-3 3h3L11 8");
}
</style><path class="b7rqk9bpn"/>`,
		"fallback": "uix-sharp:electrical-fault",
	});
}

export default Component;
