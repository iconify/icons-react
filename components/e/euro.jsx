import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/f/f45he6j8z.css';
import '../../css/y/yew2subez.css';
import '../../css/x/xqpsdfbut.css';
import '../../css/z/zqqmclbaa.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><g class="xyjtgccot"><path class="f45he6j8z"/><path class="yew2subez"/></g><path class="xqpsdfbut"/><path class="zqqmclbaa"/></g>`,
		"fallback": "pepicons-print:euro",
	});
}

export default Component;
