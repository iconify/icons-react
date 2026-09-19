import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/me0ufb1cz.css';
import '../../css/j/j5odggzwk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="me0ufb1cz"/><path class="j5odggzwk"/></g>`,
		"fallback": "iconoir:ev-plug-charging",
	});
}

export default Component;
