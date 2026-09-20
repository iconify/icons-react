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
		"content": `<style>.tzdca0fvs {
  fill: currentColor;
  d: path("M10.5 4a.5.5 0 0 1 0 1H5.707L15 14.293V9.5a.5.5 0 0 1 1 0v6a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L5 5.707V10.5a.5.5 0 0 1-1 0v-6a.5.5 0 0 1 .5-.5z");
}
</style><path class="tzdca0fvs"/>`,
		"fallback": "fluent:arrow-maximize-top-left-bottom-right-20-regular",
	});
}

export default Component;
