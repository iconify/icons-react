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
		"content": `<style>.a1n0dvbdd {
  fill: var(--svg-color--f0b90b, #f0b90b);
  d: path("m7.068 12l-2.03 2.03L3.003 12l2.03-2.03zm4.935-4.935l3.482 3.483l2.03-2.03L12.003 3L6.485 8.518l2.03 2.03zm6.964 2.905L16.937 12l2.03 2.03l2.03-2.03zm-6.964 6.965L8.52 13.452l-2.03 2.03L12.003 21l5.512-5.518l-2.03-2.03zm0-2.905l2.03-2.03l-2.03-2.03L9.967 12z");
}
</style><path class="a1n0dvbdd"/>`,
		"fallback": "token-branded:binance",
	});
}

export default Component;
