import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxpc9z8vj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bxpc9z8vj"/>`,
		"fallback": "keyline-icons:app-window-cursor-fill",
	});
}

export default Component;
