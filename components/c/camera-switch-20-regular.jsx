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
		"content": `<style>.vbzq8-5mu {
  fill: currentColor;
  d: path("M14.854 2.146a.5.5 0 0 0-.708.708L15.293 4H4a2 2 0 0 0-2 2v6.5a.5.5 0 0 0 1 0V6a1 1 0 0 1 1-1h11.293l-1.147 1.146a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708zM16 15a1 1 0 0 0 1-1V7.5a.5.5 0 0 1 1 0V14a2 2 0 0 1-2 2H4.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .708.708L4.707 15zm-3-5a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-1 0a2 2 0 1 0-4 0a2 2 0 0 0 4 0");
}
</style><path class="vbzq8-5mu"/>`,
		"fallback": "fluent:camera-switch-20-regular",
	});
}

export default Component;
