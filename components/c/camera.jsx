import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zdl255bfm.css';
import '../../css/s/s-hbz213j.css';
import '../../css/a/a0jk60bqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="zdl255bfm"/><path class="s-hbz213j"/><path class="a0jk60bqa"/></g>`,
		"fallback": "streamline-freehand-color:camera",
	});
}

export default Component;
