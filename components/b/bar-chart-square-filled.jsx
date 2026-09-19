import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jiddfub6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jiddfub6u"/>`,
		"fallback": "boxicons:bar-chart-square-filled",
	});
}

export default Component;
