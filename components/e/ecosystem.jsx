import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msnkf_bkn.css';
import '../../css/k/kq5sxkbvs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msnkf_bkn"/><path class="kq5sxkbvs"/>`,
		"fallback": "nimbus:ecosystem",
	});
}

export default Component;
