import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3ge_tu1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3ge_tu1o"/>`,
		"fallback": "boxicons:arrow-big-down-line-filled",
	});
}

export default Component;
