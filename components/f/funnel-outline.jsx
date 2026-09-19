import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/j7n0u1bfa.css';
import '../../css/g/gz5qvg7hl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="funnel-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="j7n0u1bfa"/><path class="gz5qvg7hl"/></g></g>`,
		"fallback": "cuida:funnel-outline",
	});
}

export default Component;
