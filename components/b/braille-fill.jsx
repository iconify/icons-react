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
		"content": `<style>.kx8vjq-2k {
  fill: currentColor;
  d: path("M6 4a2 2 0 1 1 3.999-.001A2 2 0 0 1 6 4m10.01-1a1 1 0 0 1 0 2H16a1 1 0 0 1 0-2ZM14 12a2 2 0 1 1 3.999-.001A2 2 0 0 1 14 12m-5.99-1a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2ZM6 20a2 2 0 1 1 3.999-.001A2 2 0 0 1 6 20m10.01-1a1 1 0 0 1 0 2H16a1 1 0 0 1 0-2Z");
}
</style><path class="kx8vjq-2k"/>`,
		"fallback": "coolicons:braille-fill",
	});
}

export default Component;
