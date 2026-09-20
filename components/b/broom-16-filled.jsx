import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rscj95vlo {
  fill: currentColor;
  d: path("M14.854 1.146a.5.5 0 0 1 0 .708L10.896 5.81a4.8 4.8 0 0 0-.708-.707l3.958-3.958a.5.5 0 0 1 .708 0M4.653 6.19l-.391.365l5.195 5.195l.396-.396a3.67 3.67 0 0 0 0-5.207c-1.453-1.453-3.765-1.385-5.2.043m-3.36 1.855l2.093-.952l5.52 5.52l-.95 2.094a.5.5 0 0 1-.81.146l-6-6a.5.5 0 0 1 .147-.808");
}
</style><path class="rscj95vlo"/>`,
		"fallback": "fluent:broom-16-filled",
	});
}

export default Component;
