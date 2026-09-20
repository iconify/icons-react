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
		"content": `<style>.djxl3zllx {
  fill: currentColor;
  d: path("M6 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V2.707L5.586 7.121a2.5 2.5 0 1 1-.707-.707L9.293 2H6.5a.5.5 0 0 1-.5-.5");
}
</style><path class="djxl3zllx"/>`,
		"fallback": "fluent:arrow-flow-diagonal-up-right-12-filled",
	});
}

export default Component;
