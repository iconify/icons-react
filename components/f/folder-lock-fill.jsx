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
		"content": `<style>.kn436fbtk {
  fill: currentColor;
  d: path("M216 72h-84.69L104 44.69A15.86 15.86 0 0 0 92.69 40H40a16 16 0 0 0-16 16v144.62A15.4 15.4 0 0 0 39.38 216h73.18a8 8 0 0 0 0-16H40V88h176v16a8 8 0 0 0 16 0V88a16 16 0 0 0-16-16M40 72V56h52.69l16 16Zm184 88h-8v-4a28 28 0 0 0-56 0v4h-8a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h72a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8m-24 0h-24v-4a12 12 0 0 1 24 0Z");
}
</style><path class="kn436fbtk"/>`,
		"fallback": "ph:folder-lock-fill",
	});
}

export default Component;
