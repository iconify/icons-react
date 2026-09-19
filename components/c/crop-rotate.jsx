import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vail75b-l.css';
import '../../css/t/too86x9zd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vail75b-l"/><path class="too86x9zd"/>`,
		"fallback": "cil:crop-rotate",
	});
}

export default Component;
