import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkeyf6b4y.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bkeyf6b4y"/>`,
		"fallback": "fa6-solid:bars",
	});
}

export default Component;
