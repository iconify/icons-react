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
		"content": `<style>.gtc2q-bae {
  fill: currentColor;
  d: path("M19 2a3 3 0 0 1 3 3v11.586l-3.293-3.293a2.414 2.414 0 0 0-3.414 0l-1 1a.414.414 0 0 1-.586 0l-3-3a2.414 2.414 0 0 0-3.414 0L2 16.586V5a3 3 0 0 1 3-3Zm-6 6a2 2 0 1 0 3.999.001A2 2 0 0 0 13 8m8.707 11.121q.121.122.277.196A3 3 0 0 1 19 22H5a3 3 0 0 1-2.984-2.683a1 1 0 0 0 .277-.196l6.414-6.414a.414.414 0 0 1 .586 0l3 3a2.414 2.414 0 0 0 3.414 0l1-1a.414.414 0 0 1 .586 0Z");
}
</style><path class="gtc2q-bae"/>`,
		"fallback": "coolicons:image-fill",
	});
}

export default Component;
