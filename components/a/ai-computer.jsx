import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qa9f7xbjt.css';
import '../../css/o/oiu-3i4pj.css';
import '../../css/s/s5n1v6bqp.css';
import '../../css/e/excc-72qq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="qa9f7xbjt"/><path class="oiu-3i4pj"/><path class="s5n1v6bqp"/><path class="excc-72qq"/></g>`,
		"fallback": "hugeicons:ai-computer",
	});
}

export default Component;
