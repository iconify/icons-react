import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/ru2oq_b2q.css';
import '../../css/q/qovl6_a4a.css';
import '../../css/z/zqnlvbcth.css';
import '../../css/u/unp9pjbld.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(1)" class="n1lsf0bnc"><path class="ru2oq_b2q"/><ellipse class="qovl6_a4a"/><ellipse class="zqnlvbcth"/><path class="unp9pjbld"/></g>`,
		"fallback": "si-glyph:drum",
	});
}

export default Component;
