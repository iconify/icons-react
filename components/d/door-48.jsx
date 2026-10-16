import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wifw4mbzo.css';
import '../../css/j/j5rik_bqy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wifw4mbzo"/><path class="j5rik_bqy"/>`,
		"fallback": "energy-icons:door-48",
	});
}

export default Component;
