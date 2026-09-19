import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izr1mgbxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izr1mgbxe"/>`,
		"fallback": "guidance:flash-allowed",
	});
}

export default Component;
