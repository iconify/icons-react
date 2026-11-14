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
		"content": `<style>.s1veo1qip {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 2.5v19m17-19v9.7m-17-2.7h17M3.5 17h8.2M6.5 4h6v5.5h-6Zm0 8.25h5V17h-5ZM18 15v6.5m2.815-4.875l-5.63 3.25m0-3.25l5.63 3.25");
}
</style><path class="s1veo1qip"/>`,
		"fallback": "uix-sharp:cold-storage-rack",
	});
}

export default Component;
