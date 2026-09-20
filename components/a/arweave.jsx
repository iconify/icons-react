import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt7khlbia.css';
import '../../css/o/opq0cgqba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dt7khlbia"/><path class="opq0cgqba"/>`,
		"fallback": "token:arweave",
	});
}

export default Component;
