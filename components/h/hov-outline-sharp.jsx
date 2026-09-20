import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.reixkd6wc {
  fill: currentColor;
  d: path("m12 21l-5-9.02L12 3l5 8.98zm0-2.034l3.848-6.985L12 5.035L8.152 11.98zM12 12");
}
</style><path class="reixkd6wc"/>`,
		"fallback": "material-symbols-light:hov-outline-sharp",
	});
}

export default Component;
