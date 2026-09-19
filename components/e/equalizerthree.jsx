import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5uh4p05j.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5uh4p05j"/>`,
		"fallback": "whh:equalizerthree",
	});
}

export default Component;
