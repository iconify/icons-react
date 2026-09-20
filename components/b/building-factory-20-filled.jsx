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
		"content": `<style>.q3zasjo_w {
  fill: currentColor;
  d: path("M2.938 3.4A1.5 1.5 0 0 1 4.435 2h1.129a1.5 1.5 0 0 1 1.497 1.4l.866 13A1.5 1.5 0 0 1 6.431 18H3.568a1.5 1.5 0 0 1-1.496-1.6zM8.431 18c.346-.46.536-1.043.494-1.666l-.521-7.82l3.761-3.386A.5.5 0 0 1 13 5.5v3.377l4.165-3.749A.5.5 0 0 1 18 5.5v11a1.5 1.5 0 0 1-1.5 1.5zM16 17v-4.2a.8.8 0 0 0-.8-.8h-3.4a.8.8 0 0 0-.8.8V17z");
}
</style><path class="q3zasjo_w"/>`,
		"fallback": "fluent:building-factory-20-filled",
	});
}

export default Component;
