import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nk82ntb9q.css';
import '../../css/d/dmhf5-11x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nk82ntb9q"/><path clip-rule="evenodd" class="dmhf5-11x"/></g>`,
		"fallback": "majesticons:file-plus",
	});
}

export default Component;
