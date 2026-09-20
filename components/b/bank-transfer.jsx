import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddx_pdqze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ddx_pdqze"/>`,
		"fallback": "mdi:bank-transfer",
	});
}

export default Component;
