import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ut3-glbdq.css';
import '../../css/t/tnzkiacoo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ut3-glbdq"/><path class="tnzkiacoo"/>`,
		"fallback": "boxicons:dock-bottom-arrow",
	});
}

export default Component;
