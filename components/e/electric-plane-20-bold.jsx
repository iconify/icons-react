import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txfkbpb1g.css';
import '../../css/y/y7nz84h9j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txfkbpb1g"/><path class="y7nz84h9j"/>`,
		"fallback": "energy-icons:electric-plane-20-bold",
	});
}

export default Component;
