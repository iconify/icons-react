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
		"content": `<style>.uuc7o3bsz {
  fill: currentColor;
  d: path("M4 8.923h16V4.769H4zm0 5.154h16V9.923H4zm0 5.154h16v-4.154H4zM5.77 7.654V6.039h1.615v1.615zm0 5.154v-1.616h1.615v1.616zm0 5.154v-1.616h1.615v1.616z");
}
</style><path class="uuc7o3bsz"/>`,
		"fallback": "material-symbols-light:data-table-sharp",
	});
}

export default Component;
