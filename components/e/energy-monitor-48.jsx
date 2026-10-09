import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b63tvfb8j.css';
import '../../css/h/hutzz7vvf.css';
import '../../css/x/xno-yqkug.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b63tvfb8j"/><path class="hutzz7vvf"/><path class="xno-yqkug"/>`,
		"fallback": "energy-icons:energy-monitor-48",
	});
}

export default Component;
