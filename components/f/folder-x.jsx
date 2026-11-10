import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdwzhobal.css';
import '../../css/l/l1ybqzb6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zdwzhobal"/><path class="l1ybqzb6w"/></g>`,
		"fallback": "andrsrxn:folder-x",
	});
}

export default Component;
