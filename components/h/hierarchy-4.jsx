import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/moumnzugl.css';
import '../../css/n/n8ljoccwu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="moumnzugl"/><path class="n8ljoccwu"/></g>`,
		"fallback": "streamline-color:hierarchy-4",
	});
}

export default Component;
