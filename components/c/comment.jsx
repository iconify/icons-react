import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5im1qbau.css';

const viewBox = {"width":1137,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5im1qbau"/>`,
		"fallback": "websymbol:comment",
	});
}

export default Component;
