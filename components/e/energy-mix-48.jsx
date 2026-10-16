import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zh4cf0bwk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zh4cf0bwk"/>`,
		"fallback": "energy-icons:energy-mix-48",
	});
}

export default Component;
