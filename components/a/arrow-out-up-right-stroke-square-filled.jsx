import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrw7eflsk.css';
import '../../css/i/isu2qlb9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrw7eflsk"/><path class="isu2qlb9h"/>`,
		"fallback": "boxicons:arrow-out-up-right-stroke-square-filled",
	});
}

export default Component;
