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
		"content": `<style>.ccl_j8bia {
  fill: currentColor;
  d: path("M10 4c2.817 0 4.415 1.923 4.647 4.246h.07c1.814 0 3.283 1.512 3.283 3.377S16.53 15 14.718 15H5.282C3.469 15 2 13.488 2 11.623s1.47-3.377 3.282-3.377h.071C5.587 5.908 7.183 4 10 4");
}
</style><path class="ccl_j8bia"/>`,
		"fallback": "fluent:cloud-20-filled",
	});
}

export default Component;
