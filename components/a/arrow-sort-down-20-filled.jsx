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
		"content": `<style>.jjiicdbvr {
  fill: currentColor;
  d: path("M9.75 17a.76.76 0 0 0 .59-.278l2.94-2.946a.75.75 0 0 0 0-1.06a.75.75 0 0 0-1.058 0L10.5 14.434V3.75a.75.75 0 0 0-1.5 0v10.694l-1.722-1.733a.75.75 0 0 0-1.059 0a.75.75 0 0 0 0 1.061l3.004 3.008a.73.73 0 0 0 .527.22");
}
</style><path class="jjiicdbvr"/>`,
		"fallback": "fluent:arrow-sort-down-20-filled",
	});
}

export default Component;
