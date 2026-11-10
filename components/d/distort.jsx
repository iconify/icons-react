import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qn56i8hoh.css';
import '../../css/a/appj4fb4e.css';
import '../../css/y/yjo4rgbez.css';
import '../../css/i/ig7og-50b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qn56i8hoh"/><path class="appj4fb4e"/><path class="yjo4rgbez"/><path class="ig7og-50b"/></g>`,
		"fallback": "andrsrxn:distort",
	});
}

export default Component;
