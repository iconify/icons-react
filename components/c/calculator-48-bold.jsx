import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-pj1ullj.css';
import '../../css/v/vfwj5rb6n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-pj1ullj"/><path class="vfwj5rb6n"/>`,
		"fallback": "energy-icons:calculator-48-bold",
	});
}

export default Component;
