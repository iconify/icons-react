import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/p/p6xciw-nf.css';
import '../../css/c/ci7_qeb4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="p6xciw-nf"/><path class="ci7_qeb4b"/></g>`,
		"fallback": "matita:epsilon-capital",
	});
}

export default Component;
