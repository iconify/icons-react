import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qq-frsbtb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qq-frsbtb"/>`,
		"fallback": "boxicons:file-detail-filled",
	});
}

export default Component;
