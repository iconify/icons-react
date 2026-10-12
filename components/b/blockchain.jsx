import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jqkj7xb2w.css';
import '../../css/m/mcotyybnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jqkj7xb2w"/><path class="mcotyybnk"/></g>`,
		"fallback": "andrsrxn:blockchain",
	});
}

export default Component;
