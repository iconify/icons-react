import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/c/ce61-k2jd.css';
import '../../css/y/y9biqacmn.css';
import '../../css/b/beywe9bnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="ce61-k2jd"/><path class="y9biqacmn"/><path class="beywe9bnf"/></g>`,
		"fallback": "matita:heart",
	});
}

export default Component;
