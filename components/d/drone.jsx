import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z3qc_db2n.css';
import '../../css/s/sutgbdv0l.css';
import '../../css/x/x2ck18sgx.css';
import '../../css/f/fjmjfbq2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="z3qc_db2n"/><path class="sutgbdv0l"/><path class="x2ck18sgx"/><path class="fjmjfbq2x"/></g>`,
		"fallback": "iconoir:drone",
	});
}

export default Component;
