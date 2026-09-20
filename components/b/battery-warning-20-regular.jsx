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
		"content": `<style>.d85yvacib {
  fill: currentColor;
  d: path("M3.604 9.554a1 1 0 0 1 1.79-.001l3.5 6.999A1 1 0 0 1 7.998 18H1.003a1 1 0 0 1-.896-1.448zm.894 6.445a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1M16 5a3 3 0 0 1 3 3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1a3 3 0 0 1-3 3H9.238l-.5-1H16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v4q.001.225.049.435l-.582 1.167A3 3 0 0 1 0 12V8a3 3 0 0 1 3-3zM4.498 10.995a.5.5 0 0 0-.5.5v3.002a.5.5 0 1 0 1.001 0v-3.002a.5.5 0 0 0-.5-.5");
}
</style><path class="d85yvacib"/>`,
		"fallback": "fluent:battery-warning-20-regular",
	});
}

export default Component;
