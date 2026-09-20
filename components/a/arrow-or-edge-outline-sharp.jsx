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
		"content": `<style>.pfl0m297n {
  fill: currentColor;
  d: path("m7.827 20.02l-3.288-3.29l.688-.707l2.1 2.094v-7.27H2.231V4h1v5.846h5.096v8.252l2.094-2.075l.695.708zm8.346 0l-3.288-3.29l.688-.707l2.1 2.094v-8.27h5.096V4h1v6.846h-5.096v7.277l2.094-2.1l.694.708z");
}
</style><path class="pfl0m297n"/>`,
		"fallback": "material-symbols-light:arrow-or-edge-outline-sharp",
	});
}

export default Component;
