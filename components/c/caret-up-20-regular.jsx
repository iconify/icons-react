import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wy1kq8btd {
  fill: currentColor;
  d: path("M5.019 12.28a1 1 0 0 0 .778 1.628h8.407a1 1 0 0 0 .778-1.628l-3.815-4.723a1.5 1.5 0 0 0-2.334 0zm9.185.628H5.797L9.61 8.186a.5.5 0 0 1 .778 0z");
}
</style><path class="wy1kq8btd"/>`,
		"fallback": "fluent:caret-up-20-regular",
	});
}

export default Component;
