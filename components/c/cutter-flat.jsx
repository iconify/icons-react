import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l_j_ge77a.css';
import '../../css/t/td1gekpxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l_j_ge77a"/><path clip-rule="evenodd" class="td1gekpxr"/></g>`,
		"fallback": "streamline-sharp-color:cutter-flat",
	});
}

export default Component;
