import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvknf2l6j.css';

const viewBox = {"width":1024,"height":960};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvknf2l6j"/>`,
		"fallback": "whh:curling",
	});
}

export default Component;
