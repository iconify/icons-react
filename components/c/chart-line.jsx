import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ib5j_-bhr.css';
import '../../css/t/t5_nw5bsz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ib5j_-bhr"/><path class="t5_nw5bsz"/>`,
		"fallback": "cil:chart-line",
	});
}

export default Component;
