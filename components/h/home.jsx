import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wqyu6xbxt.css';
import '../../css/t/tglvgkwfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wqyu6xbxt"/><path class="tglvgkwfz"/></g>`,
		"fallback": "streamline-freehand-color:home",
	});
}

export default Component;
