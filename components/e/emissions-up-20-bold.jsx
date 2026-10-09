import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/onux0z-vm.css';
import '../../css/q/qeqgxacwk.css';
import '../../css/l/l4v5cqb8b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="onux0z-vm"/><path class="qeqgxacwk"/><path class="l4v5cqb8b"/>`,
		"fallback": "energy-icons:emissions-up-20-bold",
	});
}

export default Component;
