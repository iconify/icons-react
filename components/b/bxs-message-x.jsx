import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sk2k54bcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sk2k54bcn"/>`,
		"fallback": "bx:bxs-message-x",
	});
}

export default Component;
