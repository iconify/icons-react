import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1vonibur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t1vonibur"/>`,
		"fallback": "griddy-icons:folder-locked-filled",
	});
}

export default Component;
