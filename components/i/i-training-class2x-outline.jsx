import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q0d56eg_t.css';
import '../../css/n/nfvntw7dx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="q0d56eg_t"/><path class="nfvntw7dx"/></g>`,
		"fallback": "healthicons:i-training-class2x-outline",
	});
}

export default Component;
