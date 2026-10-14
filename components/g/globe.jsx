import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/s/sxnyd4ewi.css';
import '../../css/b/b-p73fn2z.css';
import '../../css/v/v7tp-zgpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="sxnyd4ewi"/><path class="b-p73fn2z"/><path class="v7tp-zgpi"/></g>`,
		"fallback": "matita:globe",
	});
}

export default Component;
