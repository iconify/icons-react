import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jfvfjwbce.css';
import '../../css/o/o36a_mzxh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="jfvfjwbce"/><path class="o36a_mzxh"/></g>`,
		"fallback": "healthicons:child-care-outline",
	});
}

export default Component;
