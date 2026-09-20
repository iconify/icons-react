import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3-u2ubdr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3-u2ubdr"/>`,
		"fallback": "pinhead:bench-with-backrest-in-rectangular-shelter",
	});
}

export default Component;
