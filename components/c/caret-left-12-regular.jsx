import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bu85sv3ic {
  fill: currentColor;
  d: path("M8 3.994c0-.887-1.07-1.334-1.7-.712L4.26 5.288a1 1 0 0 0 0 1.425L6.3 8.719c.63.621 1.7.174 1.7-.713zM4.963 6L7 3.994v4.012z");
}
</style><path class="bu85sv3ic"/>`,
		"fallback": "fluent:caret-left-12-regular",
	});
}

export default Component;
