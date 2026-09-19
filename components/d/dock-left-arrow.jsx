import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9o3_3bkw.css';
import '../../css/w/wmzc81bdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9o3_3bkw"/><path class="wmzc81bdm"/>`,
		"fallback": "boxicons:dock-left-arrow",
	});
}

export default Component;
