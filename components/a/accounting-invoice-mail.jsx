import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xjkn4dkhv.css';
import '../../css/l/lqbt8yntn.css';
import '../../css/h/huyefibpi.css';
import '../../css/u/u8i52477k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xjkn4dkhv"/><path class="lqbt8yntn"/><path class="huyefibpi"/><path class="u8i52477k"/></g>`,
		"fallback": "streamline-freehand-color:accounting-invoice-mail",
	});
}

export default Component;
