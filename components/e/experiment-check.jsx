import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/meik4yazj.css';
import '../../css/t/tqk7n6bfj.css';
import '../../css/w/wjkv1_b8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="meik4yazj"/><path class="tqk7n6bfj"/><path class="wjkv1_b8w"/></g>`,
		"fallback": "andrsrxn:experiment-check",
	});
}

export default Component;
