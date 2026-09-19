import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bj3k6byyc.css';
import '../../css/k/kzzp29yul.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="bj3k6byyc"/><path class="kzzp29yul"/></g>`,
		"fallback": "healthicons:death2x-outline",
	});
}

export default Component;
