import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0kkqwbxd.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0kkqwbxd"/>`,
		"fallback": "foundation:indent-less",
	});
}

export default Component;
