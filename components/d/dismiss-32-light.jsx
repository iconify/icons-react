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
		"content": `<style>.aj78q4bzw {
  fill: currentColor;
  d: path("M27.854 4.854a.5.5 0 0 0-.708-.708L16 15.293L4.854 4.146a.5.5 0 1 0-.708.708L15.293 16L4.146 27.146a.5.5 0 0 0 .708.708L16 16.707l11.146 11.147a.5.5 0 0 0 .708-.708L16.707 16z");
}
</style><path class="aj78q4bzw"/>`,
		"fallback": "fluent:dismiss-32-light",
	});
}

export default Component;
