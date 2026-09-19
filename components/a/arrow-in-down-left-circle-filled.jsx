import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxwbsu80r.css';
import '../../css/x/xxyrztbdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vxwbsu80r"/><path class="xxyrztbdj"/>`,
		"fallback": "boxicons:arrow-in-down-left-circle-filled",
	});
}

export default Component;
