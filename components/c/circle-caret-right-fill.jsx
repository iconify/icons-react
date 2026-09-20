import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbjhztbyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nbjhztbyf"/>`,
		"fallback": "keyline-icons:circle-caret-right-fill",
	});
}

export default Component;
