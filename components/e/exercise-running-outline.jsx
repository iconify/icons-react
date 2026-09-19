import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t5fq1ab-j.css';
import '../../css/g/g2rko8buj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t5fq1ab-j"/><path clip-rule="evenodd" class="g2rko8buj"/></g>`,
		"fallback": "healthicons:exercise-running-outline",
	});
}

export default Component;
