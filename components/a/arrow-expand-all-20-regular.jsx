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
		"content": `<style>.x2bki6bwm {
  fill: currentColor;
  d: path("M2 4.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5m3.146 11.354a.5.5 0 0 0 .708 0l2.5-2.5a.5.5 0 0 0-.708-.708L6 14.293V7.5a.5.5 0 0 0-1 0v6.793l-1.646-1.647a.5.5 0 0 0-.708.708zM17.5 8h-7a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1");
}
</style><path class="x2bki6bwm"/>`,
		"fallback": "fluent:arrow-expand-all-20-regular",
	});
}

export default Component;
