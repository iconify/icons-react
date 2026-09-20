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
		"content": `<style>.pag7pgb4j {
  fill: currentColor;
  d: path("M7 21v-8H2v-2h5V3h3v8h4V6h3v5h5v2h-5v5h-3v-5h-4v8z");
}
</style><path class="pag7pgb4j"/>`,
		"fallback": "material-symbols:align-vertical-center-outline-sharp",
	});
}

export default Component;
