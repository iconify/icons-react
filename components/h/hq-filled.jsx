import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3dc3r9sh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z3dc3r9sh"/>`,
		"fallback": "reicon:hq-filled",
	});
}

export default Component;
