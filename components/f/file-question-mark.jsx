import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p1_qjs5ul.css';
import '../../css/d/d2ll1zofo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p1_qjs5ul"/><path class="d2ll1zofo"/></g>`,
		"fallback": "hugeicons:file-question-mark",
	});
}

export default Component;
