import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4i0zhp8u.css';
import '../../css/z/zhkqvsbwg.css';
import '../../css/f/f45da2b6l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4i0zhp8u"/><path class="zhkqvsbwg"/><path class="f45da2b6l"/>`,
		"fallback": "energy-icons:energy-monitor-48-bold",
	});
}

export default Component;
