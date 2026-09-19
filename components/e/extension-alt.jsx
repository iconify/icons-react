import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yaed-9bqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yaed-9bqb"/>`,
		"fallback": "gg:extension-alt",
	});
}

export default Component;
