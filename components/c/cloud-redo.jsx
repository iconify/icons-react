import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv8kr3h9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nv8kr3h9p"/>`,
		"fallback": "uil:cloud-redo",
	});
}

export default Component;
