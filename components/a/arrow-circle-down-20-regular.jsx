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
		"content": `<style>.il2jkacpv {
  fill: currentColor;
  d: path("m13.354 10.854l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L9.5 12.293V6.5a.5.5 0 0 1 1 0v5.793l2.146-2.147a.5.5 0 0 1 .708.708M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m7-8a7 7 0 1 1-14 0a7 7 0 0 1 14 0");
}
</style><path class="il2jkacpv"/>`,
		"fallback": "fluent:arrow-circle-down-20-regular",
	});
}

export default Component;
