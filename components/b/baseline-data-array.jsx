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
		"content": `<style>.slm8u7s3p {
  fill: currentColor;
  d: path("M15 4v2h3v12h-3v2h5V4zM4 20h5v-2H6V6h3V4H4z");
}
</style><path class="slm8u7s3p"/>`,
		"fallback": "ic:baseline-data-array",
	});
}

export default Component;
