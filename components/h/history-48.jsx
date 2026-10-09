import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v8xbdfbrh.css';
import '../../css/h/hok4abbfh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v8xbdfbrh"/><path class="hok4abbfh"/>`,
		"fallback": "energy-icons:history-48",
	});
}

export default Component;
