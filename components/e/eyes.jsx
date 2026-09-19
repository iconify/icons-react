import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qutqqi3-n.css';
import '../../css/q/q-pec5bsd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qutqqi3-n"/><path clip-rule="evenodd" class="q-pec5bsd"/></g>`,
		"fallback": "healthicons:eyes",
	});
}

export default Component;
