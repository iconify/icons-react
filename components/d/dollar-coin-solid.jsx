import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/e96biryhi.css';
import '../../css/e/e13eubf_b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="e96biryhi"/><path class="e13eubf_b"/></g>`,
		"fallback": "streamline-plump:dollar-coin-solid",
	});
}

export default Component;
