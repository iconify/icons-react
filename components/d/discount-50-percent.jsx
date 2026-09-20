import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hbl_i6buq.css';
import '../../css/q/q8ea5g2bk.css';
import '../../css/e/ei4x3rbqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="hbl_i6buq"/><path class="q8ea5g2bk"/><path class="ei4x3rbqz"/></g>`,
		"fallback": "streamline-freehand-color:discount-50-percent",
	});
}

export default Component;
