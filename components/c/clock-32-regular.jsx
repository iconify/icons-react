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
		"content": `<style>.ntsu14tpc {
  fill: currentColor;
  d: path("M14 9a1 1 0 1 1 2 0v7h4a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1zm2 21c7.732 0 14-6.268 14-14S23.732 2 16 2S2 8.268 2 16s6.268 14 14 14m0-2C9.373 28 4 22.627 4 16S9.373 4 16 4s12 5.373 12 12s-5.373 12-12 12");
}
</style><path class="ntsu14tpc"/>`,
		"fallback": "fluent:clock-32-regular",
	});
}

export default Component;
