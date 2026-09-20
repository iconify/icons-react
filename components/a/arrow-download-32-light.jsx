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
		"content": `<style>.veq0-v3th {
  fill: currentColor;
  d: path("M16 3a.5.5 0 0 1 .5.5v18.293l6.646-6.647a.5.5 0 0 1 .708.708l-7.5 7.5a.5.5 0 0 1-.708 0l-7.5-7.5a.5.5 0 0 1 .708-.708l6.646 6.647V3.5A.5.5 0 0 1 16 3M6.5 28.5a.5.5 0 0 1 0-1h19a.5.5 0 0 1 0 1z");
}
</style><path class="veq0-v3th"/>`,
		"fallback": "fluent:arrow-download-32-light",
	});
}

export default Component;
