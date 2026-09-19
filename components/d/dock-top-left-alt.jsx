import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdh0n-k9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdh0n-k9z"/>`,
		"fallback": "boxicons:dock-top-left-alt",
	});
}

export default Component;
