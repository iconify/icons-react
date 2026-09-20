import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cf24k7b6j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cf24k7b6j"/>`,
		"fallback": "streamline:cloud",
	});
}

export default Component;
