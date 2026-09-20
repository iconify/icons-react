import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ffshe1a3t.css';
import '../../css/l/l3ny9db4u.css';
import '../../css/f/f8hvkbcme.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ffshe1a3t"/><path class="l3ny9db4u"/><path class="f8hvkbcme"/></g>`,
		"fallback": "streamline-color:calendar-jump-to-date",
	});
}

export default Component;
