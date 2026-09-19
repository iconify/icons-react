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
		"content": `<style>.i2ky_fbxv {
  fill: currentColor;
  d: path("M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z");
}
</style><path class="i2ky_fbxv"/>`,
		"fallback": "ic:home",
	});
}

export default Component;
