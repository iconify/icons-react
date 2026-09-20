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
		"content": `<style>.h-wy3ctco {
  fill: currentColor;
  d: path("M9.462 22v-2.98H5l7-7.5l7 7.5h-4.462V22zm1-.98h3.076v-3h3.146l-4.684-5l-4.684 5h3.146zM5 14.27l7-7.5l7 7.5h-1.367L12 8.25l-5.633 6.02zm0-4.75l7-7.5l7 7.5h-1.367L12 3.5L6.367 9.52zm7 8.5");
}
</style><path class="h-wy3ctco"/>`,
		"fallback": "material-symbols-light:arrow-shape-up-stack-2-outline-sharp",
	});
}

export default Component;
