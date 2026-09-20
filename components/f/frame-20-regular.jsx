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
		"content": `<style>.abwswloba {
  fill: currentColor;
  d: path("M5 2.5a.5.5 0 0 0-1 0V4H2.5a.5.5 0 0 0 0 1H4v10H2.5a.5.5 0 0 0 0 1H4v1.5a.5.5 0 0 0 1 0V16h10v1.5a.5.5 0 0 0 1 0V16h1.5a.5.5 0 0 0 0-1H16V5h1.5a.5.5 0 0 0 0-1H16V2.5a.5.5 0 0 0-1 0V4H5zM15 5v10H5V5z");
}
</style><path class="abwswloba"/>`,
		"fallback": "fluent:frame-20-regular",
	});
}

export default Component;
