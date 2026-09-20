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
		"content": `<style>.oada_d5bi {
  fill: currentColor;
  d: path("M176 68c-1.88 0-3.76.08-5.62.22a95.7 95.7 0 0 0-21.24-24C110 12.6 56.56 19.8 54.3 20.12a12 12 0 0 0-5 21.86C64.52 52.1 72.13 68.45 75.71 85a76 76 0 1 0 67.22 127.43A76 76 0 1 0 176 68m-22.76 53.06A76.8 76.8 0 0 0 141 105.59a52.1 52.1 0 0 1 16.14-10a107 107 0 0 1 5.12 18.9a12 12 0 0 0-9.02 6.57M134.19 63a70.8 70.8 0 0 1 11.23 11.46A76.3 76.3 0 0 0 121 91.55A75.4 75.4 0 0 0 100.19 85C97.72 71.05 93 56.65 84.58 44c15.2 1.68 34.17 6.48 49.61 19M88 212a52 52 0 0 1-9.53-103.11a173 173 0 0 1-.75 21.59a12 12 0 0 0-5.09 23.38a56.27 56.27 0 0 0 30.74 0a12 12 0 0 0-1.5-23.36a194 194 0 0 0 .69-20.41A52 52 0 0 1 88 212m88-16a51.9 51.9 0 0 1-19.24-3.68a75.83 75.83 0 0 0 4-54.43a56.36 56.36 0 0 0 30.66 0a12 12 0 0 0-4.79-23.42a136.4 136.4 0 0 0-5.12-22.15A52 52 0 0 1 176 196");
}
</style><path class="oada_d5bi"/>`,
		"fallback": "ph:cherries-bold",
	});
}

export default Component;
