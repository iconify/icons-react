import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcrybgb3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcrybgb3j"/>`,
		"fallback": "boxicons:folder-check-filled",
	});
}

export default Component;
