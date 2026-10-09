import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qm8uiwbzj.css';
import '../../css/w/wcp6j0b8w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qm8uiwbzj"/><path class="wcp6j0b8w"/>`,
		"fallback": "energy-icons:connector-chademo-20-bold",
	});
}

export default Component;
