import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.zvgc0wmca {
  fill: currentColor;
  d: path("M212.24 171.76a6 6 0 0 1 0 8.48l-32 32a6 6 0 0 1-8.48-8.48L193.51 182H48a6 6 0 0 1 0-12h145.51l-21.75-21.76a6 6 0 0 1 8.48-8.48ZM75.76 116.24a6 6 0 0 0 8.48-8.48L62.49 86H208a6 6 0 0 0 0-12H62.49l21.75-21.76a6 6 0 0 0-8.48-8.48l-32 32a6 6 0 0 0 0 8.48Z");
}
</style><path class="zvgc0wmca"/>`,
		"fallback": "ph:arrows-left-right-light",
	});
}

export default Component;
