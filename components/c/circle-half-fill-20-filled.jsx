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
		"content": `<style>.oep2_1mtc {
  fill: currentColor;
  d: path("M3.5 10a6.5 6.5 0 0 1 13 0zM10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16");
}
</style><path class="oep2_1mtc"/>`,
		"fallback": "fluent:circle-half-fill-20-filled",
	});
}

export default Component;
