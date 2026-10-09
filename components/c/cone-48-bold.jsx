import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zh3e6tb5e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zh3e6tb5e"/>`,
		"fallback": "energy-icons:cone-48-bold",
	});
}

export default Component;
