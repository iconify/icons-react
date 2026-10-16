import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrqy-392k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrqy-392k"/>`,
		"fallback": "energy-icons:acid-rain-48",
	});
}

export default Component;
