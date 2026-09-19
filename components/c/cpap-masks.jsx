import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e-p0ui3kd.css';
import '../../css/h/hal_odbor.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e-p0ui3kd"/><path class="hal_odbor"/></g>`,
		"fallback": "healthicons:cpap-masks",
	});
}

export default Component;
