import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x53po9jgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x53po9jgf"/>`,
		"fallback": "mdi:file-check",
	});
}

export default Component;
