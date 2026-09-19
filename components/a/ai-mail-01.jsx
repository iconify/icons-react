import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/n/nioqj773q.css';
import '../../css/m/ma0e2kbll.css';
import '../../css/o/os5u60drp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="nioqj773q"/><path class="ma0e2kbll"/><path class="os5u60drp"/></g>`,
		"fallback": "hugeicons:ai-mail-01",
	});
}

export default Component;
