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
		"content": `<style>.y1_8nwvhw {
  fill: currentColor;
  d: path("M14 4a3 3 0 1 1 0 6H6a2 2 0 1 0 0 4h10.293l-.647-.646a.5.5 0 0 1 .708-.708l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708-.708l.647-.646H6a3 3 0 1 1 0-6h8a2 2 0 1 0 0-4H3.5a.5.5 0 0 1 0-1z");
}
</style><path class="y1_8nwvhw"/>`,
		"fallback": "fluent:arrow-wrap-20-regular",
	});
}

export default Component;
