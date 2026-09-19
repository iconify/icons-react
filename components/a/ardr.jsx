import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b_cic_b5b.css';
import '../../css/q/qlzn1idjj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="b_cic_b5b"/><path class="qlzn1idjj"/></g>`,
		"fallback": "cryptocurrency-color:ardr",
	});
}

export default Component;
