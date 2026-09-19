import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqtjih4ab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqtjih4ab"/>`,
		"fallback": "boxicons:camera-plus-filled",
	});
}

export default Component;
