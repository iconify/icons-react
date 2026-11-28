import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qh5re7bed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qh5re7bed"/>`,
		"fallback": "noviair:butterfly-heart",
	});
}

export default Component;
