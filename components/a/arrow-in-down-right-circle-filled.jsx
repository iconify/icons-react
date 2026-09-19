import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifoopobcj.css';
import '../../css/c/c5qcubb2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifoopobcj"/><path class="c5qcubb2z"/>`,
		"fallback": "boxicons:arrow-in-down-right-circle-filled",
	});
}

export default Component;
