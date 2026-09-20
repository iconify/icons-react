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
		"content": `<style>.z2f9o-5ai {
  fill: currentColor;
  d: path("M7 3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h1zm1 14h6a3 3 0 0 0 3-3v-1H8zm9-5V6a3 3 0 0 0-3-3H8v9z");
}
</style><path class="z2f9o-5ai"/>`,
		"fallback": "fluent:data-treemap-20-filled",
	});
}

export default Component;
