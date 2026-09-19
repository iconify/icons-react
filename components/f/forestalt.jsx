import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q192h5cgl.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q192h5cgl"/>`,
		"fallback": "whh:forestalt",
	});
}

export default Component;
