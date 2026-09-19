import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/w83s4xb3u.css';
import '../../css/f/ft-x5jtvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="w83s4xb3u"/><path class="ft-x5jtvc"/></g>`,
		"fallback": "hugeicons:folder-locked",
	});
}

export default Component;
