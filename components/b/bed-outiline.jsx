import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/z9n2k_b-v.css';
import '../../css/r/r0wuxo4xj.css';
import '../../css/p/pabn9aboq.css';
import '../../css/q/qwujpbv7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bed-outiline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="z9n2k_b-v"/><path class="r0wuxo4xj"/><path class="pabn9aboq"/><path class="qwujpbv7u"/></g></g>`,
		"fallback": "cuida:bed-outiline",
	});
}

export default Component;
