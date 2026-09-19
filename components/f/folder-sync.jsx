import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcuk2y6ku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qcuk2y6ku"/>`,
		"fallback": "hugeicons:folder-sync",
	});
}

export default Component;
