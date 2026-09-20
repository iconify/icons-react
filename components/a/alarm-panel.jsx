import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbj6ibb7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbj6ibb7r"/>`,
		"fallback": "mdi-light:alarm-panel",
	});
}

export default Component;
