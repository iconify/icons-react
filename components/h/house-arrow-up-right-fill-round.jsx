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
		"content": `<style>.peks8m2yi {
  fill: currentColor;
  d: path("M3 17v-5.185a5 5 0 0 1 1.707-3.763l4-3.5a5 5 0 0 1 6.586 0l4 3.5A5 5 0 0 1 21 11.815V17a5 5 0 0 1-1.464 3.536A5 5 0 0 1 16 22H8a5 5 0 0 1-5-5m13-6a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2h1.586l-4.293 4.293a.999.999 0 1 0 1.414 1.414L14 13.414V15a1 1 0 0 0 2 0Z");
}
</style><path class="peks8m2yi"/>`,
		"fallback": "coolicons:house-arrow-up-right-fill-round",
	});
}

export default Component;
