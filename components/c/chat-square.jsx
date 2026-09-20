import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0309eb6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u0309eb6g"/>`,
		"fallback": "reicon:chat-square",
	});
}

export default Component;
