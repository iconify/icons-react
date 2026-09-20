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
		"content": `<style>.t1tw0wbdi {
  fill: currentColor;
  d: path("M7.321 16L5 18.321V19h.562l3-3zm3.7 0l-3 3h1.24l3-3zm3.648 0l-3 3h1.24l3-3zm3.654 0l-3 3h1.24L19 16.564V16zM16.35 7.212l-3.675 3.675l-2-2L6.961 12.6l.689.688l3.025-3l2 2L17.038 7.9zM4 20V4h16v16z");
}
</style><path class="t1tw0wbdi"/>`,
		"fallback": "material-symbols-light:data-thresholding-sharp",
	});
}

export default Component;
