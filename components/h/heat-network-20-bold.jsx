import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qho2-b78i.css';
import '../../css/c/cu2uiexyf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qho2-b78i"/><path class="cu2uiexyf"/>`,
		"fallback": "energy-icons:heat-network-20-bold",
	});
}

export default Component;
