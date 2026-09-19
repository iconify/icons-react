import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgwihvb1u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgwihvb1u"/>`,
		"fallback": "game-icons:froe-and-mallet",
	});
}

export default Component;
