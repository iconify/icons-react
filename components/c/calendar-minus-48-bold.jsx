import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2upil6xf.css';
import '../../css/z/zbtq--b8j.css';
import '../../css/s/st45emjbc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2upil6xf"/><path class="zbtq--b8j"/><path class="st45emjbc"/>`,
		"fallback": "energy-icons:calendar-minus-48-bold",
	});
}

export default Component;
