import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6tsj1b8b.css';
import '../../css/u/uxo_8abdr.css';
import '../../css/e/ef63e0_qa.css';
import '../../css/w/wm3j448rr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6tsj1b8b"/><path class="uxo_8abdr"/><path clip-rule="evenodd" class="ef63e0_qa"/><path class="wm3j448rr"/>`,
		"fallback": "solar:file-pen-bold",
	});
}

export default Component;
