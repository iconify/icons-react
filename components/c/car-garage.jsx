import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ocojmhbyq.css';
import '../../css/w/w7pi-wbxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ocojmhbyq"/><path class="w7pi-wbxp"/></g>`,
		"fallback": "andrsrxn:car-garage",
	});
}

export default Component;
