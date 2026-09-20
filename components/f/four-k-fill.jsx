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
		"content": `<style>.qrfs47b4j {
  fill: currentColor;
  d: path("M79.55 136L96 113v23ZM232 56v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-108 88a8 8 0 0 0-8-8h-4V88a8 8 0 0 0-14.51-4.65l-40 56A8 8 0 0 0 64 152h32v16a8 8 0 0 0 16 0v-16h4a8 8 0 0 0 8-8m49.59-22.23l24.48-28.56a8 8 0 0 0-12.14-10.42L157.8 115.6l-5.8 6.77V88a8 8 0 0 0-16 0v80a8 8 0 0 0 16 0v-21l10.62-12.39l22.52 37.55a8 8 0 1 0 13.72-8.24Z");
}
</style><path class="qrfs47b4j"/>`,
		"fallback": "ph:four-k-fill",
	});
}

export default Component;
