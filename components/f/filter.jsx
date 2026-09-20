import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zk23wxppw.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zk23wxppw"/>`,
		"fallback": "system-uicons:filter",
	});
}

export default Component;
