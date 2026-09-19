import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vztpcnbbz.css';

const viewBox = {"width":1024,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vztpcnbbz"/>`,
		"fallback": "whh:batterycharged",
	});
}

export default Component;
