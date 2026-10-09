import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8odd-vsc.css';
import '../../css/o/orpof4bpf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8odd-vsc"/><path class="orpof4bpf"/>`,
		"fallback": "energy-icons:fast-forward-48-bold",
	});
}

export default Component;
