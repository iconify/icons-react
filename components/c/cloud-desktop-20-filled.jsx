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
		"content": `<style>.gq8gqqbep {
  fill: currentColor;
  d: path("M10 4c2.817 0 4.415 1.923 4.647 4.246h.07c1.242 0 2.322.709 2.88 1.754H11a2 2 0 0 0-2 2v3H5.282C3.469 15 2 13.488 2 11.623s1.47-3.377 3.282-3.377h.071C5.587 5.908 7.183 4 10 4m0 8a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2v1h.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1h.5v-1h-2a1 1 0 0 1-1-1z");
}
</style><path class="gq8gqqbep"/>`,
		"fallback": "fluent:cloud-desktop-20-filled",
	});
}

export default Component;
