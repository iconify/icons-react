import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsai45bmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fsai45bmq"/>`,
		"fallback": "boxicons:cylinder-filled",
	});
}

export default Component;
