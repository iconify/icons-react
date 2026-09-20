import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qp_t65bqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qp_t65bqx"/>`,
		"fallback": "token:apw",
	});
}

export default Component;
