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
		"content": `<style>.gn4z1bcxf {
  fill: currentColor;
  d: path("M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m.854-4.646a.5.5 0 0 1-.708-.708l2.147-2.146H6.5a.5.5 0 0 1 0-1h5.793l-2.147-2.146a.5.5 0 0 1 .708-.708l3 3a.5.5 0 0 1 0 .708z");
}
</style><path class="gn4z1bcxf"/>`,
		"fallback": "fluent:arrow-circle-right-20-filled",
	});
}

export default Component;
