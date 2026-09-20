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
		"content": `<style>.d-ef35b5l {
  fill: currentColor;
  d: path("M9.462 19v-2.98H5l7-7.5l7 7.5h-4.462V19zM5 11.27l7-7.5l7 7.5h-1.367L12 5.25l-5.633 6.02z");
}
</style><path class="d-ef35b5l"/>`,
		"fallback": "material-symbols-light:arrow-shape-up-stack-sharp",
	});
}

export default Component;
