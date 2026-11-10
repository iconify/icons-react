import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/czn09obko.css';
import '../../css/k/knq-a1bwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="czn09obko"/><path clip-rule="evenodd" class="knq-a1bwz"/></g>`,
		"fallback": "andrsrxn:drag-drop",
	});
}

export default Component;
