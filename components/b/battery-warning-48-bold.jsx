import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/weah0ec9g.css';
import '../../css/d/d29jj3bil.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="weah0ec9g"/><path class="d29jj3bil"/>`,
		"fallback": "energy-icons:battery-warning-48-bold",
	});
}

export default Component;
