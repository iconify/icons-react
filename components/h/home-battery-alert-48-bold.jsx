import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6ku4ac1f.css';
import '../../css/e/e2mg85laq.css';
import '../../css/y/ygtv74bcc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6ku4ac1f"/><path class="e2mg85laq"/><path class="ygtv74bcc"/>`,
		"fallback": "energy-icons:home-battery-alert-48-bold",
	});
}

export default Component;
