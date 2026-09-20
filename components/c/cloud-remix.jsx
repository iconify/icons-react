import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4btlvb9d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d4btlvb9d"/>`,
		"fallback": "streamline:cloud-remix",
	});
}

export default Component;
