import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yrcchbbji.css';
import '../../css/j/jdbe-woge.css';
import '../../css/f/f-59ph3vy.css';
import '../../css/x/x4hixr_1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="yrcchbbji"/><path class="jdbe-woge"/><path class="f-59ph3vy"/><path class="x4hixr_1a"/></g>`,
		"fallback": "streamline-freehand-color:business-cash-idea",
	});
}

export default Component;
