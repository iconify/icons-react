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
		"content": `<style>.l061w5bxm {
  fill: currentColor;
  d: path("M8.854 3.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L5.707 8H12a2 2 0 0 1 2 2v6.5a.5.5 0 0 0 1 0V10a3 3 0 0 0-3-3H5.707l3.147-3.146a.5.5 0 0 0 0-.708");
}
</style><path class="l061w5bxm"/>`,
		"fallback": "fluent:arrow-turn-up-left-20-regular",
	});
}

export default Component;
