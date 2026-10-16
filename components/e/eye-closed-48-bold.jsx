import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2zqenb_d.css';
import '../../css/t/tvzdim3hh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2zqenb_d"/><path class="tvzdim3hh"/>`,
		"fallback": "energy-icons:eye-closed-48-bold",
	});
}

export default Component;
