import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pakhxgbjk.css';
import '../../css/o/o4dqfipva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pakhxgbjk"/><path class="o4dqfipva"/></g>`,
		"fallback": "andrsrxn:bone",
	});
}

export default Component;
