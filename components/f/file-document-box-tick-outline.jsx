import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgv4qp2mj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgv4qp2mj"/>`,
		"fallback": "mdi:file-document-box-tick-outline",
	});
}

export default Component;
