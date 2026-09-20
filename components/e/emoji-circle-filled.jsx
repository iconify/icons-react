import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j58-_kbjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j58-_kbjv"/>`,
		"fallback": "reicon:emoji-circle-filled",
	});
}

export default Component;
