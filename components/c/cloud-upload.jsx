import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrm53eszd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qrm53eszd"/>`,
		"fallback": "hugeicons:cloud-upload",
	});
}

export default Component;
