import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/ypfi6ibup.css';
import '../../css/o/ov58__wqf.css';
import '../../css/k/kh69_w8cl.css';
import '../../css/o/orua5gbtu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ypfi6ibup"/><path class="ov58__wqf"/><path class="kh69_w8cl"/><path class="orua5gbtu"/></g>`,
		"fallback": "healthicons:alcohol2x-outline",
	});
}

export default Component;
