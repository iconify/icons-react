import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wi6co0b7q.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wi6co0b7q"/>`,
		"fallback": "fa7-brands:fonticons",
	});
}

export default Component;
