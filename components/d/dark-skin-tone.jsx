import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bwf9m2bjt {
  d: path("M4 4h120v120H4z");
}

.byqjdhqfn {
  stop-color: var(--svg-color--5c4037, #5C4037);
}

.k40j4o2hy {
  stop-color: var(--svg-color--6d5047, #6D5047);
}

.pstqgdcgt {
  stop-color: var(--svg-color--70534a, #70534A);
}

.swg2uaceq {
  stop-color: var(--svg-color--63463d, #63463D);
}
</style><linearGradient id="ssvg-id-dark-skin-tonea" x1="64" x2="64" y1="4.37" y2="123.52" gradientUnits="userSpaceOnUse"><stop offset="0" class="pstqgdcgt"/><stop offset=".467" class="k40j4o2hy"/><stop offset=".842" class="swg2uaceq"/><stop offset="1" class="byqjdhqfn"/></linearGradient><path fill="url(#ssvg-id-dark-skin-tonea)" class="bwf9m2bjt"/>`,
		"fallback": "noto:dark-skin-tone",
	});
}

export default Component;
