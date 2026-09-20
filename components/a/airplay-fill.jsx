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
		"content": `<style>.anvu332xr {
  fill: currentColor;
  d: path("M174.15 210.88A8 8 0 0 1 168 224H88a8 8 0 0 1-6.15-13.12l40-48a8 8 0 0 1 12.29 0ZM208 40H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h20.22a4 4 0 0 0 3.07-1.44l38.28-45.92a24 24 0 0 1 21-8.51a24.68 24.68 0 0 1 16.25 8.94l37.91 45.49a4 4 0 0 0 3.07 1.44H208a24 24 0 0 0 24-24V64a24 24 0 0 0-24-24");
}
</style><path class="anvu332xr"/>`,
		"fallback": "ph:airplay-fill",
	});
}

export default Component;
