import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/njfd6dbvn.css';
import '../../css/j/jscjiebbs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="njfd6dbvn"/><path class="jscjiebbs"/></g>`,
		"fallback": "healthicons:exercise-walking-outline",
	});
}

export default Component;
