import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z110gs1ve.css';
import '../../css/w/w7tw1ibww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z110gs1ve"/><path class="w7tw1ibww"/></g>`,
		"fallback": "andrsrxn:explotion",
	});
}

export default Component;
