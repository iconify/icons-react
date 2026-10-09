import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9f9bgb4v.css';
import '../../css/r/rtxnsrb6j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9f9bgb4v"/><path class="rtxnsrb6j"/>`,
		"fallback": "energy-icons:energy-efficiency-48",
	});
}

export default Component;
