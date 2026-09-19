import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qi9h__ikp.css';
import '../../css/h/hwt2tuv6e.css';
import '../../css/j/j_kppeg2r.css';
import '../../css/t/tfw8j54dv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qi9h__ikp"/><circle class="hwt2tuv6e"/><circle class="j_kppeg2r"/><circle class="tfw8j54dv"/>`,
		"fallback": "bx:cheese",
	});
}

export default Component;
