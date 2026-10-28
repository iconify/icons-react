import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w3i-qdbpg.css';
import '../../css/t/t5anmlbbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="w3i-qdbpg"/><path class="t5anmlbbo"/></g>`,
		"fallback": "andrsrxn:align-box-right-top",
	});
}

export default Component;
