import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdjf7db0v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fdjf7db0v"/>`,
		"fallback": "streamline:align-center-remix",
	});
}

export default Component;
