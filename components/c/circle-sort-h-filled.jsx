import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybni8x36i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ybni8x36i"/>`,
		"fallback": "reicon:circle-sort-h-filled",
	});
}

export default Component;
