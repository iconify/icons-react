import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/t-ohslb4m.css';
import '../../css/d/dklgphbkr.css';
import '../../css/t/tjas9wbhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="t-ohslb4m"/><path class="dklgphbkr"/><path class="tjas9wbhh"/></g>`,
		"fallback": "streamline-freehand-color:app-window-two",
	});
}

export default Component;
