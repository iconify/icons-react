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
		"content": `<style>.flwl_ac4s {
  fill: currentColor;
  d: path("M12 13V9c0-.55-.45-1-1-1H7V6h5V4H9.5V3h-2v1H6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h4v2H5v2h2.5v1h2v-1H11c.55 0 1-.45 1-1m7.59-.48l-5.66 5.65l-2.83-2.83l-1.41 1.42L13.93 21L21 13.93z");
}
</style><path class="flwl_ac4s"/>`,
		"fallback": "ic:baseline-price-check",
	});
}

export default Component;
