import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pycxs8orj.css';
import '../../css/h/h1lfc-bnw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pycxs8orj"/><path class="h1lfc-bnw"/>`,
		"fallback": "energy-icons:calendar-check-48",
	});
}

export default Component;
