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
		"content": `<style>.auzc5ej5z {
  fill: currentColor;
  d: path("M2 2.5a.5.5 0 0 1 1 0v.854a4 4 0 1 1-.963 3.19c-.04-.298.207-.544.508-.544c.251 0 .451.205.489.453A3 3 0 1 0 3.764 4H4.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z");
}
</style><path class="auzc5ej5z"/>`,
		"fallback": "fluent:arrow-counterclockwise-12-regular",
	});
}

export default Component;
