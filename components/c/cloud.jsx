import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/el98ugclt.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="el98ugclt"/>`,
		"fallback": "wi:cloud",
	});
}

export default Component;
