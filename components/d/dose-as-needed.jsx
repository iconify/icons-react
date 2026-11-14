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
		"content": `<style>.wpxkv0ywu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m17.157 3.015l2.828 2.828a1.5 1.5 0 0 1 0 2.121L7.964 19.985a1.5 1.5 0 0 1-2.121 0l-2.828-2.828a1.5 1.5 0 0 1 0-2.121L15.036 3.015a1.5 1.5 0 0 1 2.121 0Zm-8.132 6.01l4.95 4.95M18.5 15c0 2.5 1 3.5 3.5 3.5c-2.5 0-3.5 1-3.5 3.5c0-2.5-1-3.5-3.5-3.5c2.5 0 3.5-1 3.5-3.5Z");
}
</style><path class="wpxkv0ywu"/>`,
		"fallback": "uix-sharp:dose-as-needed",
	});
}

export default Component;
