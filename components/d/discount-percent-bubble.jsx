import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nnmn-z2cn.css';
import '../../css/l/lcrr_8hel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nnmn-z2cn"/><path class="lcrr_8hel"/></g>`,
		"fallback": "streamline-freehand-color:discount-percent-bubble",
	});
}

export default Component;
