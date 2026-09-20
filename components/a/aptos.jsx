import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x15d_8b-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x15d_8b-e"/>`,
		"fallback": "token:aptos",
	});
}

export default Component;
