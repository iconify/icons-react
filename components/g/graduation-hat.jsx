import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rqri2iyre.css';
import '../../css/o/olxm--psw.css';
import '../../css/w/wrooz1gda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rqri2iyre"/><path class="olxm--psw"/><path class="wrooz1gda"/></g>`,
		"fallback": "andrsrxn:graduation-hat",
	});
}

export default Component;
