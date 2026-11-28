import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f66lmuynv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f66lmuynv"/>`,
		"fallback": "iconaut:cloud-signal-solid",
	});
}

export default Component;
