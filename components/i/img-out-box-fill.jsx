import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vib04l-vj.css';
import '../../css/i/i0vrgebuc.css';
import '../../css/e/e7ble4bav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vib04l-vj"/><path class="i0vrgebuc"/><path class="e7ble4bav"/></g>`,
		"fallback": "lets-icons:img-out-box-fill",
	});
}

export default Component;
