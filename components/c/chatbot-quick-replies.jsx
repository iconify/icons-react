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
		"content": `<style>.j046bzbrc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4.5a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H8L5 12V9.5h-.5a2 2 0 0 1-2-2Zm7 8.25h12v3h-12Zm0 6h12v3h-12Z");
}
</style><path class="j046bzbrc"/>`,
		"fallback": "uix-sharp:chatbot-quick-replies",
	});
}

export default Component;
