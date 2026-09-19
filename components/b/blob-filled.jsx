import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrq_v6q4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrq_v6q4b"/>`,
		"fallback": "boxicons:blob-filled",
	});
}

export default Component;
