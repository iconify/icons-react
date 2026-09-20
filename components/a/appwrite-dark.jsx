import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owku8vbhd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owku8vbhd"/>`,
		"fallback": "selfhst:appwrite-dark",
	});
}

export default Component;
