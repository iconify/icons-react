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
		"content": `<style>.peqmxu0tw {
  fill: currentColor;
  d: path("M13.318 2.44a1.5 1.5 0 0 0-2.121 0l-8.76 8.759a1.5 1.5 0 0 0 0 2.121l4.243 4.243c.313.313.73.459 1.14.437h6.265a1.5 1.5 0 1 0 0-1h-4.72l8.196-8.197a1.5 1.5 0 0 0 0-2.121zm-1.414.706a.5.5 0 0 1 .707 0l4.243 4.243a.5.5 0 0 1 0 .707l-6.366 6.366l-4.95-4.95zM4.831 10.22l4.95 4.95l-1.687 1.687a.5.5 0 0 1-.707 0l-4.243-4.243a.5.5 0 0 1 0-.707z");
}
</style><path class="peqmxu0tw"/>`,
		"fallback": "fluent:eraser-segment-20-regular",
	});
}

export default Component;
