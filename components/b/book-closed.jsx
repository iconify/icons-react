import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/x/xjgw82buf.css';
import '../../css/q/qkj0dtbpf.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="xjgw82buf"/><path class="qkj0dtbpf"/></g>`,
		"fallback": "system-uicons:book-closed",
	});
}

export default Component;
