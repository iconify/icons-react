import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ri7onlg-q.css';
import '../../css/f/f9c2anoor.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="ri7onlg-q"/><path class="f9c2anoor"/></g>`,
		"fallback": "cryptocurrency-color:fil",
	});
}

export default Component;
