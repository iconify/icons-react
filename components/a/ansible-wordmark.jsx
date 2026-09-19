import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hj_f8hdiy.css';
import '../../css/x/x7_q-qb_c.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hj_f8hdiy"/><path class="x7_q-qb_c"/>`,
		"fallback": "devicon:ansible-wordmark",
	});
}

export default Component;
