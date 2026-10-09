import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2upil6xf.css';
import '../../css/z/zbtq--b8j.css';
import '../../css/u/uh6pk81zz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2upil6xf"/><path class="zbtq--b8j"/><path class="uh6pk81zz"/>`,
		"fallback": "energy-icons:calendar-clock-48-bold",
	});
}

export default Component;
