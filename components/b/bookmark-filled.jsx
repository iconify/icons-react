import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/poraobb1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="poraobb1v"/>`,
		"fallback": "reicon:bookmark-filled",
	});
}

export default Component;
