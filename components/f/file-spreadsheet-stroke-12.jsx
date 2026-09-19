import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtx66nbqo.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtx66nbqo"/>`,
		"fallback": "garden:file-spreadsheet-stroke-12",
	});
}

export default Component;
