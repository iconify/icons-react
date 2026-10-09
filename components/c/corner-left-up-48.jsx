import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-r-yzbxr.css';
import '../../css/u/u4q8h8_yc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-r-yzbxr"/><path class="u4q8h8_yc"/>`,
		"fallback": "energy-icons:corner-left-up-48",
	});
}

export default Component;
