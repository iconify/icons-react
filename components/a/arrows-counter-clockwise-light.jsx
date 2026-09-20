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
		"content": `<style>.c9llimbku {
  fill: currentColor;
  d: path("M88 102H40a6 6 0 0 1-6-6V48a6 6 0 0 1 12 0v33.52l18-18a93.45 93.45 0 0 1 66-27.53h.52a93.4 93.4 0 0 1 65.67 26.71a6 6 0 0 1-8.38 8.58A82 82 0 0 0 72.53 72L54.48 90H88a6 6 0 0 1 0 12m128 52h-48a6 6 0 0 0 0 12h33.52l-18.05 18a81.5 81.5 0 0 1-57.53 24h-.46a81.5 81.5 0 0 1-57.29-23.34a6 6 0 0 0-8.38 8.58A93.4 93.4 0 0 0 125.48 220h.52a93.45 93.45 0 0 0 66-27.53l18-18.05V208a6 6 0 0 0 12 0v-48a6 6 0 0 0-6-6");
}
</style><path class="c9llimbku"/>`,
		"fallback": "ph:arrows-counter-clockwise-light",
	});
}

export default Component;
