import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ml42vqrat {
  fill: currentColor;
  d: path("M159.8 151.82a19.67 19.67 0 0 1 3.58 17.05l-12.18 48A20.17 20.17 0 0 1 131.56 232h-7.12a20.17 20.17 0 0 1-19.64-15.13l-12.18-48a19.67 19.67 0 0 1 3.58-17.05a20.17 20.17 0 0 1 16-7.82h31.5a20.17 20.17 0 0 1 16.1 7.82M156 116a28 28 0 1 0-28 28a28 28 0 0 0 28-28m26 27a8 8 0 1 0 15.41 4.29a72 72 0 1 0-138.74 0A8 8 0 0 0 74 143a56 56 0 1 1 108 0M128 24a104 104 0 0 0-57.82 190.46a8 8 0 1 0 8.9-13.3a88 88 0 1 1 97.84 0a8 8 0 0 0 8.9 13.3A104 104 0 0 0 128 24");
}
</style><path class="ml42vqrat"/>`,
		"fallback": "ph:apple-podcasts-logo-fill",
	});
}

export default Component;
