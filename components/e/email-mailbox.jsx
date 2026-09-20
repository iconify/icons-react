import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oy9o_obok.css';
import '../../css/q/qb8d7ybqw.css';
import '../../css/a/a59as3_kd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oy9o_obok"/><path class="qb8d7ybqw"/><path class="a59as3_kd"/>`,
		"fallback": "streamline-pixel:email-mailbox",
	});
}

export default Component;
