import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.yt1ijxena {
  fill: currentColor;
  d: path("M16.707 22.707a1 1 0 0 0 0-1.414L12.414 17H22a1 1 0 1 0 0-2h-9.586l4.293-4.293a1 1 0 0 0-1.414-1.414l-6 6a1 1 0 0 0 0 1.414l6 6a1 1 0 0 0 1.414 0M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2S2 8.268 2 16s6.268 14 14 14m12-14c0 6.627-5.373 12-12 12S4 22.627 4 16S9.373 4 16 4s12 5.373 12 12");
}
</style><path class="yt1ijxena"/>`,
		"fallback": "fluent:arrow-circle-left-32-regular",
	});
}

export default Component;
