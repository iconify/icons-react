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
		"content": `<style>.d451uebmu {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m6.245 17.667l3.755-4.2l3.755 4.2c.611.684 1.745.251 1.745-.667V3a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v14c0 .918 1.134 1.35 1.745.666M6.5 14.38V4h7v10.381l-2.754-3.08a1 1 0 0 0-1.491 0z");
}
</style><path clip-rule="evenodd" class="d451uebmu"/>`,
		"fallback": "pepicons-pop:bookmark",
	});
}

export default Component;
