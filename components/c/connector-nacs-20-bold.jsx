import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vea99ibyc.css';
import '../../css/y/ybtvnxb3i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vea99ibyc"/><path class="ybtvnxb3i"/>`,
		"fallback": "energy-icons:connector-nacs-20-bold",
	});
}

export default Component;
