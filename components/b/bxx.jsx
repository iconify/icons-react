import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ua_-x4bud.css';
import '../../css/f/f2r653n8a.css';
import '../../css/q/qpob8mzln.css';
import '../../css/m/msjcjgj5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ua_-x4bud"/><path class="f2r653n8a"/><path class="qpob8mzln"/><path class="msjcjgj5z"/>`,
		"fallback": "token:bxx",
	});
}

export default Component;
