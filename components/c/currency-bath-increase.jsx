import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lbw7w4bcu.css';
import '../../css/d/ddx29cc4a.css';
import '../../css/n/nm2nnfboj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lbw7w4bcu"/><path class="ddx29cc4a"/><path class="nm2nnfboj"/></g>`,
		"fallback": "streamline-freehand-color:currency-bath-increase",
	});
}

export default Component;
