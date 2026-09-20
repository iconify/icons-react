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
		"content": `<style>.tlyt2x6ww {
  fill: currentColor;
  d: path("M29 5a1 1 0 0 1 1 1v20a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1M9.793 7.793a1 1 0 0 1 1.414 1.414L5.414 15H24a1 1 0 0 1 0 2H5.414l5.793 5.793a1 1 0 0 1-1.414 1.414l-7.5-7.5a1 1 0 0 1 0-1.414z");
}
</style><path class="tlyt2x6ww"/>`,
		"fallback": "fluent:arrow-export-rtl-32-regular",
	});
}

export default Component;
