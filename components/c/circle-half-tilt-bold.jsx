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
		"content": `<style>.tg_t0cr8b {
  fill: currentColor;
  d: path("M204.37 51.6A108.08 108.08 0 1 0 236 128a108.1 108.1 0 0 0-31.63-76.4M176 197a83.4 83.4 0 0 1-16 8.75V113l16-16ZM68.6 68.58a84.08 84.08 0 0 1 109.7-7.88L60.72 178.33A84.08 84.08 0 0 1 68.6 68.58M96 177v28.69a83.6 83.6 0 0 1-18.3-10.39Zm24 34.62V153l16-16v74.64a84.7 84.7 0 0 1-16-.02m80-40.27v-86.7a84.24 84.24 0 0 1 0 86.7");
}
</style><path class="tg_t0cr8b"/>`,
		"fallback": "ph:circle-half-tilt-bold",
	});
}

export default Component;
