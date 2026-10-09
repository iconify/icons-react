import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hw7-9fnfj.css';
import '../../css/f/fu7nvvbdq.css';
import '../../css/n/n-t7_zj3n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hw7-9fnfj"/><path class="fu7nvvbdq"/><path class="n-t7_zj3n"/>`,
		"fallback": "energy-icons:garage-48",
	});
}

export default Component;
