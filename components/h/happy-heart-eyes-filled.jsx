import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvb7dyg7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvb7dyg7m"/>`,
		"fallback": "boxicons:happy-heart-eyes-filled",
	});
}

export default Component;
