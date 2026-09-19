import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkkbvnx2x.css';

const viewBox = {"width":1024,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nkkbvnx2x"/>`,
		"fallback": "whh:fallingstar",
	});
}

export default Component;
