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
		"content": `<style>.kzapn9b9j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8h4v13.5h-4Zm0-2.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM17.5 8h4v13.5h-4Zm0-2.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM6.5 21.5h11M6.5 10l4.5 2.5v6l-4.5 1Zm2.25 1.25V19m8.75-9L13 12.5v6l4.5 1Zm-2.25 1.25V19");
}
</style><path class="kzapn9b9j"/>`,
		"fallback": "uix-sharp:gated-entrance",
	});
}

export default Component;
