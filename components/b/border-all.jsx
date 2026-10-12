import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g-wfpkbfs.css';
import '../../css/e/eazqo0ywn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(90 21.24 2.76)" class="g-wfpkbfs"/><path class="eazqo0ywn"/></g>`,
		"fallback": "andrsrxn:border-all",
	});
}

export default Component;
