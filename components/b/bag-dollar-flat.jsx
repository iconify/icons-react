import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e46gr-b0m.css';
import '../../css/q/qv2i-ibqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e46gr-b0m"/><path clip-rule="evenodd" class="qv2i-ibqm"/></g>`,
		"fallback": "streamline-sharp-color:bag-dollar-flat",
	});
}

export default Component;
