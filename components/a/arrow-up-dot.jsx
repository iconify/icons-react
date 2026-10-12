import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qsn-mfbqf.css';
import '../../css/d/d9t5kgbyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qsn-mfbqf"/><path class="d9t5kgbyo"/></g>`,
		"fallback": "andrsrxn:arrow-up-dot",
	});
}

export default Component;
