import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oiu7ubcyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oiu7ubcyf"/>`,
		"fallback": "cbi:go-group",
	});
}

export default Component;
