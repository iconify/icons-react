import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3uo1db8t.css';
import '../../css/w/wmzc81bdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z3uo1db8t"/><path class="wmzc81bdm"/>`,
		"fallback": "boxicons:dock-left-arrow-filled",
	});
}

export default Component;
