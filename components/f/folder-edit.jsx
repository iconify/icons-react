import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e4vw3f2ww.css';
import '../../css/h/h5xnnyl3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e4vw3f2ww"/><path class="h5xnnyl3n"/></g>`,
		"fallback": "andrsrxn:folder-edit",
	});
}

export default Component;
