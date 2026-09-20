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
		"content": `<style>.ltus74bkw {
  fill: currentColor;
  d: path("M20 44a12 12 0 0 1 12-12h192a12 12 0 0 1 0 24H32a12 12 0 0 1-12-12m204 156H32a12 12 0 0 0 0 24h192a12 12 0 0 0 0-24M148 68a12 12 0 0 0-12 12v96a12 12 0 0 0 24 0v-27.49l8.44-9.65l25.19 43.19A12 12 0 0 0 214.37 170l-29.26-50.14L213 87.9a12 12 0 1 0-18-15.8l-35 40V80a12 12 0 0 0-12-12M80 176v-12H36a12 12 0 0 1-9.47-19.37l56-72A12 12 0 0 1 104 80v60h4a12 12 0 0 1 0 24h-4v12a12 12 0 0 1-24 0m0-36v-25l-19.46 25Z");
}
</style><path class="ltus74bkw"/>`,
		"fallback": "ph:four-k-bold",
	});
}

export default Component;
