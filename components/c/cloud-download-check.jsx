import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfe0fh0ma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfe0fh0ma"/>`,
		"fallback": "noviair:cloud-download-check",
	});
}

export default Component;
