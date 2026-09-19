import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0j_qj-1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w0j_qj-1e"/>`,
		"fallback": "basil:heart-outline",
	});
}

export default Component;
