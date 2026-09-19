import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtufp_f3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtufp_f3x"/>`,
		"fallback": "boxicons:caret-big-left-filled",
	});
}

export default Component;
