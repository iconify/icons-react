import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jtpmrsboj.css';
import '../../css/l/ls96-guas.css';
import '../../css/a/abfdqvz9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jtpmrsboj"/><path class="ls96-guas"/><path class="abfdqvz9s"/></g>`,
		"fallback": "andrsrxn:app-window",
	});
}

export default Component;
