import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncjysacrn.css';
import '../../css/h/hv--zic2y.css';
import '../../css/e/evb5kpc_i.css';
import '../../css/z/zdagr0b5r.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncjysacrn"/><path class="hv--zic2y"/><circle class="evb5kpc_i"/><circle class="zdagr0b5r"/>`,
		"fallback": "iwwa:good",
	});
}

export default Component;
