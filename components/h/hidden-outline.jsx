import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/c/c1_zvmcqj.css';
import '../../css/z/zr7_nbbae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="c1_zvmcqj"/><path class="zr7_nbbae"/></g>`,
		"fallback": "bitcoin-icons:hidden-outline",
	});
}

export default Component;
