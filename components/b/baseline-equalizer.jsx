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
		"content": `<style>.hfpf-rs6d {
  fill: currentColor;
  d: path("M10 20h4V4h-4zm-6 0h4v-8H4zM16 9v11h4V9z");
}
</style><path class="hfpf-rs6d"/>`,
		"fallback": "ic:baseline-equalizer",
	});
}

export default Component;
