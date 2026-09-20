import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xu4b94b-l.css';
import '../../css/k/ks_0wqsob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xu4b94b-l"/><path class="ks_0wqsob"/></g>`,
		"fallback": "tdesign:component-input",
	});
}

export default Component;
