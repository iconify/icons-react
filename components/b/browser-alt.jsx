import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/e/eht93h04u.css';
import '../../css/h/hnehztdcm.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="eht93h04u"/><path class="hnehztdcm"/></g>`,
		"fallback": "system-uicons:browser-alt",
	});
}

export default Component;
