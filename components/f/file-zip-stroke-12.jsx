import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xf6mrnboy.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xf6mrnboy"/>`,
		"fallback": "garden:file-zip-stroke-12",
	});
}

export default Component;
