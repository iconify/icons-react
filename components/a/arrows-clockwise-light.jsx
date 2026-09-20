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
		"content": `<style>.muglnx0pe {
  fill: currentColor;
  d: path("M222 48v48a6 6 0 0 1-6 6h-48a6 6 0 0 1 0-12h33.52l-18.05-18a81.5 81.5 0 0 0-57.53-24h-.46a81.5 81.5 0 0 0-57.29 23.28a6 6 0 1 1-8.38-8.58a93.38 93.38 0 0 1 65.67-26.76h.52a93.45 93.45 0 0 1 66 27.53l18 18V48a6 6 0 0 1 12 0m-34.19 136.72a81.5 81.5 0 0 1-57.29 23.34h-.46a81.5 81.5 0 0 1-57.53-24L54.48 166H88a6 6 0 0 0 0-12H40a6 6 0 0 0-6 6v48a6 6 0 0 0 12 0v-33.52l18 18.05a93.45 93.45 0 0 0 66 27.53h.52a93.38 93.38 0 0 0 65.67-26.76a6 6 0 1 0-8.38-8.58");
}
</style><path class="muglnx0pe"/>`,
		"fallback": "ph:arrows-clockwise-light",
	});
}

export default Component;
