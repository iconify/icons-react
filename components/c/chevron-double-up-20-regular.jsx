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
		"content": `<style>.fyx-lgbna {
  fill: currentColor;
  d: path("M10 9a.5.5 0 0 1 .354.146l5.5 5.5a.5.5 0 0 1-.707.707L10 10.208l-5.146 5.147a.5.5 0 1 1-.708-.707l5.5-5.5A.5.5 0 0 1 10 9m0-5a.5.5 0 0 1 .354.146l5.5 5.5a.5.5 0 0 1-.707.707L10 5.208l-5.146 5.147a.5.5 0 1 1-.708-.708l5.5-5.5A.5.5 0 0 1 10 4");
}
</style><path class="fyx-lgbna"/>`,
		"fallback": "fluent:chevron-double-up-20-regular",
	});
}

export default Component;
