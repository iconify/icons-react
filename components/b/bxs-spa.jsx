import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/do0n5ibbt.css';
import '../../css/n/nnksa96uy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="do0n5ibbt"/><path class="nnksa96uy"/>`,
		"fallback": "bx:bxs-spa",
	});
}

export default Component;
