import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qp7_n3beu.css';
import '../../css/b/bxv5csb_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qp7_n3beu"/><path class="bxv5csb_k"/>`,
		"fallback": "bx:bxs-chevrons-right",
	});
}

export default Component;
