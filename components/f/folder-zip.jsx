import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbdfjabgc.css';
import '../../css/j/jzq9heogi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbdfjabgc"/><path class="jzq9heogi"/>`,
		"fallback": "boxicons:folder-zip",
	});
}

export default Component;
