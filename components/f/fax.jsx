import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nts0nnl7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nts0nnl7r"/>`,
		"fallback": "mdi:fax",
	});
}

export default Component;
