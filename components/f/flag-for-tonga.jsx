import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cst7plbxl {
  fill: var(--svg-color--e6e7e8, #e6e7e8);
  d: path("M22 10H10C3.373 10 0 14.925 0 21v11h22z");
}

.k0v45_bpu {
  fill: var(--svg-color--ec1c24, #ec1c24);
  d: path("M54 10H22v22H0v11c0 6.075 3.373 11 10 11h44c6.627 0 10-4.925 10-11V21c0-6.075-3.373-11-10-11");
}

.tpbluzn2i {
  fill: var(--svg-color--ec1c24, #ec1c24);
  d: path("M14 19v-5H8v5H3v6h5v5h6v-5h5v-6z");
}
</style><path class="k0v45_bpu"/><path class="cst7plbxl"/><path class="tpbluzn2i"/>`,
		"fallback": "emojione-v1:flag-for-tonga",
	});
}

export default Component;
