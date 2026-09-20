import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zwqiuqb6d.css';
import '../../css/u/ujfbrab8s.css';
import '../../css/i/inw6q5r9y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zwqiuqb6d"/><path clip-rule="evenodd" class="ujfbrab8s"/><path class="inw6q5r9y"/></g>`,
		"fallback": "streamline-plump-color:dashboard-gauge-2-flat",
	});
}

export default Component;
