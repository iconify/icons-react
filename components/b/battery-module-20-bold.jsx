import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oh_lku0cz.css';
import '../../css/d/d7ym1acks.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oh_lku0cz"/><path class="d7ym1acks"/>`,
		"fallback": "energy-icons:battery-module-20-bold",
	});
}

export default Component;
