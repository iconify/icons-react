import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zw5sfwb0q.css';
import '../../css/s/s_-b-lbsy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zw5sfwb0q"/><path class="s_-b-lbsy"/>`,
		"fallback": "energy-icons:battery-warning-48",
	});
}

export default Component;
