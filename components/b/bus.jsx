import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yoc66lyzr.css';
import '../../css/p/p4gdroa5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yoc66lyzr"/><path class="p4gdroa5b"/>`,
		"fallback": "boxicons:bus",
	});
}

export default Component;
