import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/uorsolbkj.css';
import '../../css/y/ylyju8blb.css';
import '../../css/f/fozjv0_ua.css';
import '../../css/k/k6j73l8xc.css';
import '../../css/h/hlwwl46ab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="uorsolbkj"/><path class="ylyju8blb"/><path class="fozjv0_ua"/><path class="k6j73l8xc"/><path class="hlwwl46ab"/></g>`,
		"fallback": "streamline-freehand-color:crypto-currency-bitcoin-monitor-shield",
	});
}

export default Component;
