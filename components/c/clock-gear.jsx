import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ct14smb8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ct14smb8y"/>`,
		"fallback": "noviair-light:clock-gear",
	});
}

export default Component;
