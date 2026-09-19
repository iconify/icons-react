import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_x46zk6b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_x46zk6b"/>`,
		"fallback": "fa-solid:chart-line",
	});
}

export default Component;
