import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gdgje-blf {
  fill: currentColor;
  d: path("M16.116 39.634a1.25 1.25 0 0 1 0-1.768L29.982 24L16.116 10.134a1.25 1.25 0 0 1 1.768-1.768l14.75 14.75a1.25 1.25 0 0 1 0 1.768l-14.75 14.75a1.25 1.25 0 0 1-1.768 0");
}
</style><path class="gdgje-blf"/>`,
		"fallback": "fluent:chevron-right-48-regular",
	});
}

export default Component;
