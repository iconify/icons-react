import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/duwc1vbbx.css';
import '../../css/w/w9p-hib0a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duwc1vbbx"/><path class="w9p-hib0a"/>`,
		"fallback": "cil:camera-roll",
	});
}

export default Component;
