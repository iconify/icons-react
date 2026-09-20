import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qvp9oibxa.css';
import '../../css/u/u0awucbns.css';
import '../../css/y/yi5zu_b0y.css';
import '../../css/o/o-j71lb7w.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qvp9oibxa"/><path class="u0awucbns"/><path class="yi5zu_b0y"/><path class="o-j71lb7w"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-print:car-circle",
	});
}

export default Component;
