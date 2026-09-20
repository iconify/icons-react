import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j5w07jb0m.css';
import '../../css/o/ofbq5pbjj.css';
import '../../css/c/cw3vay9eg.css';
import '../../css/m/mwlp155rd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j5w07jb0m"/><path class="ofbq5pbjj"/><path class="cw3vay9eg"/><path class="mwlp155rd"/></g>`,
		"fallback": "streamline-cyber-color:cash-hand-4",
	});
}

export default Component;
