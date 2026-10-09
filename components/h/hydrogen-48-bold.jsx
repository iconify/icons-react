import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2neunb3u.css';
import '../../css/w/wiim_eylq.css';
import '../../css/a/axnz9cc6e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2neunb3u"/><path class="wiim_eylq"/><path class="axnz9cc6e"/>`,
		"fallback": "energy-icons:hydrogen-48-bold",
	});
}

export default Component;
