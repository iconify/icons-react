import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/te8r7xbxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="te8r7xbxe"/>`,
		"fallback": "keyline-icons:circle-three-quarter-fill",
	});
}

export default Component;
