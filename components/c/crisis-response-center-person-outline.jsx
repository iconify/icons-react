import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qcxefqbmu.css';
import '../../css/q/qfjf57bzy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qcxefqbmu"/><path class="qfjf57bzy"/></g>`,
		"fallback": "healthicons:crisis-response-center-person-outline",
	});
}

export default Component;
