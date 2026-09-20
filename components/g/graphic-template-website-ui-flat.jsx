import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7tyw9bke.css';
import '../../css/t/t4uxzyb1q.css';
import '../../css/k/ki7n34ear.css';
import '../../css/o/o_2uyyfmb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m7tyw9bke"/><path class="t4uxzyb1q"/><path class="ki7n34ear"/><path clip-rule="evenodd" class="o_2uyyfmb"/></g>`,
		"fallback": "streamline-plump-color:graphic-template-website-ui-flat",
	});
}

export default Component;
