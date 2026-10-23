import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/ym7ym143t.css';
import '../../css/u/uzzd8eb5t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ym7ym143t"/><path class="uzzd8eb5t"/></g>`,
		"fallback": "healthicons:eyeglasses-outline",
	});
}

export default Component;
