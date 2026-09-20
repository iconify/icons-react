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
		"content": `<style>.auvudorqp {
  fill: currentColor;
  d: path("M5 4.5A1.5 1.5 0 0 1 6.5 3h22a.5.5 0 0 1 .397.804L22.63 12l6.268 8.196A.5.5 0 0 1 28.5 21H6v7.5a.5.5 0 0 1-1 0zM6 20h21.488l-5.885-7.696a.5.5 0 0 1 0-.608L27.488 4H6.5a.5.5 0 0 0-.5.5z");
}
</style><path class="auvudorqp"/>`,
		"fallback": "fluent:flag-32-light",
	});
}

export default Component;
