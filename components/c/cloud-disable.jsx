import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qxh6mvbjx.css';
import '../../css/b/bazg25bxb.css';
import '../../css/t/t9729-8ks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qxh6mvbjx"/><path class="bazg25bxb"/><path class="t9729-8ks"/></g>`,
		"fallback": "streamline-cyber-color:cloud-disable",
	});
}

export default Component;
