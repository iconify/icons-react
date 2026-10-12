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
		"content": `<style>.ele48_bdc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.5 21.25l-3.25-5l-.728-1.19l2.25-1.65l.728 1.19L8.75 16V4.75h3v6.75V3h3v8.5v-7.25h3v7.25v-4.75h3v7.75c0 3.75-2.5 6.75-6 6.75ZM4.87 4.27l.38.85l.12.27l.3.03l.92.1l.3.03l-.22.21l-.69.62l-.22.2l.06.29l.19.91l.06.29l-.26-.15l-.8-.46l-.26-.15l-.26.15l-.8.46l-.26.15l.06-.29l.19-.91l.06-.29l-.22-.2l-.69-.62l-.22-.21l.3-.03l.92-.1l.3-.03l.12-.27l.38-.85l.12-.27z");
}
</style><path class="ele48_bdc"/>`,
		"fallback": "iconoven:citizenship-sharp",
	});
}

export default Component;
