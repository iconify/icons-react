import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/ot0aruiof.css';
import '../../css/x/xmqlflbwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ot0aruiof"/><path class="xmqlflbwn"/></g>`,
		"fallback": "streamline-freehand-color:currency-yen-bubble",
	});
}

export default Component;
