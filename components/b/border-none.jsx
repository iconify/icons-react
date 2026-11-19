import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zqeoj1bjx.css';
import '../../css/a/ani7tvnzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zqeoj1bjx"/><path class="ani7tvnzp"/></g>`,
		"fallback": "andrsrxn:border-none",
	});
}

export default Component;
