import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/t/t3x8jbbbh.css';
import '../../css/r/r0f02wbfa.css';
import '../../css/z/zh-912-xu.css';
import '../../css/d/dce-ubppx.css';
import '../../css/x/xy_uutb8n.css';
import '../../css/i/it6yfacxp.css';

const viewBox = {"width":49,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="t3x8jbbbh"/><rect class="r0f02wbfa"/><path class="zh-912-xu"/><path class="dce-ubppx"/><path class="xy_uutb8n"/><path class="it6yfacxp"/></g>`,
		"fallback": "icon-park:cup",
	});
}

export default Component;
