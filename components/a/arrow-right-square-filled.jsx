import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdasiyb5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fdasiyb5u"/>`,
		"fallback": "reicon:arrow-right-square-filled",
	});
}

export default Component;
