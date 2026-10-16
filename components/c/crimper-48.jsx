import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtu0zrbrj.css';
import '../../css/o/o1kbcc50r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtu0zrbrj"/><path class="o1kbcc50r"/>`,
		"fallback": "energy-icons:crimper-48",
	});
}

export default Component;
