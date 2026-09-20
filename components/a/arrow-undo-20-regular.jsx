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
		"content": `<style>.e0nokpblu {
  fill: currentColor;
  d: path("M5 2.5a.5.5 0 0 0-1 0v4.9a.6.6 0 0 0 .6.6h4.9a.5.5 0 0 0 0-1H5.906l3.473-3.019a4 4 0 0 1 5.248 6.038l-8.172 7.104a.5.5 0 0 0 .656.754l8.172-7.103a5 5 0 0 0-6.56-7.547L5 6.463z");
}
</style><path class="e0nokpblu"/>`,
		"fallback": "fluent:arrow-undo-20-regular",
	});
}

export default Component;
