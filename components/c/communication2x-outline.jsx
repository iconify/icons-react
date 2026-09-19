import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/b870k4v_b.css';
import '../../css/v/vphej7bsv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="b870k4v_b"/><path class="vphej7bsv"/></g>`,
		"fallback": "healthicons:communication2x-outline",
	});
}

export default Component;
