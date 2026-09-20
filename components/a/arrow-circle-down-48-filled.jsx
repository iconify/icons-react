import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.k7_s99bmd {
  fill: currentColor;
  d: path("M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20s20-8.954 20-20S35.046 4 24 4m-8.634 19.866a1.25 1.25 0 0 1 1.768 0l5.616 5.616V15.25a1.25 1.25 0 1 1 2.5 0v14.232l5.616-5.616a1.25 1.25 0 0 1 1.768 1.768l-7.75 7.75a1.25 1.25 0 0 1-1.768 0l-7.75-7.75a1.25 1.25 0 0 1 0-1.768");
}
</style><path class="k7_s99bmd"/>`,
		"fallback": "fluent:arrow-circle-down-48-filled",
	});
}

export default Component;
