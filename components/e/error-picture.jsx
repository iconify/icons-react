import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q15lr1adf.css';
import '../../css/q/qyyyc4b3m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q15lr1adf"/><path class="qyyyc4b3m"/></g>`,
		"fallback": "icon-park-outline:error-picture",
	});
}

export default Component;
