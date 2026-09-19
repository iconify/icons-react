import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lm6zd0yms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lm6zd0yms"/>`,
		"fallback": "boxicons:camera-portrait-filled",
	});
}

export default Component;
