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
		"content": `<style>.y2u0pbbkx {
  fill: currentColor;
  d: path("M3 5a1 1 0 0 1 1 1v20a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1m17.793 2.793a1 1 0 0 1 1.414 0l7.5 7.5a1 1 0 0 1 0 1.414l-7.5 7.5a1 1 0 1 1-1.414-1.414L26.586 17H8a1 1 0 1 1 0-2h18.586l-5.793-5.793a1 1 0 0 1 0-1.414");
}
</style><path class="y2u0pbbkx"/>`,
		"fallback": "fluent:arrow-export-ltr-32-regular",
	});
}

export default Component;
