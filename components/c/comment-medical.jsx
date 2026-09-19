import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qj_fivwwu.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qj_fivwwu"/>`,
		"fallback": "fa7-solid:comment-medical",
	});
}

export default Component;
