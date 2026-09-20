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
		"content": `<style>.l9kx2vbwv {
  fill: currentColor;
  d: path("M7.5 17a.5.5 0 0 1 0-1H14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H7.5a.5.5 0 0 1 0-1H14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3zm.146-10.854a.5.5 0 0 1 .708 0l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708l2.647-2.646H1.5a.5.5 0 0 1 0-1h8.793L7.646 6.854a.5.5 0 0 1 0-.708");
}
</style><path class="l9kx2vbwv"/>`,
		"fallback": "fluent:arrow-enter-20-regular",
	});
}

export default Component;
