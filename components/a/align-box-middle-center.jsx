import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p01z6lbzt.css';
import '../../css/i/i_j_eybcb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p01z6lbzt"/><path class="i_j_eybcb"/>`,
		"fallback": "carbon:align-box-middle-center",
	});
}

export default Component;
