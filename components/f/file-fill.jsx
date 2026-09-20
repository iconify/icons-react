import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfpi1_b5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nfpi1_b5h"/>`,
		"fallback": "ri:file-fill",
	});
}

export default Component;
