import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0phu0bsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c0phu0bsk"/>`,
		"fallback": "reicon:folder-plus-filled",
	});
}

export default Component;
