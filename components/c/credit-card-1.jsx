import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pqgqkfdkl.css';
import '../../css/d/ds0r4bcxj.css';
import '../../css/u/uy4cpqw0x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pqgqkfdkl"/><path clip-rule="evenodd" class="ds0r4bcxj"/><path class="uy4cpqw0x"/></g>`,
		"fallback": "streamline-color:credit-card-1",
	});
}

export default Component;
