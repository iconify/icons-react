import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2-yyco-z.css';
import '../../css/c/ceoqrxlgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2-yyco-z"/><path class="ceoqrxlgo"/>`,
		"fallback": "boxicons:dollar-circle-stars",
	});
}

export default Component;
