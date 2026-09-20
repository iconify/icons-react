import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c46eoqb3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c46eoqb3b"/>`,
		"fallback": "solar:ghost-bold",
	});
}

export default Component;
