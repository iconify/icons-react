import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r36rb4jfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r36rb4jfd"/>`,
		"fallback": "ri:firefox-browser-line",
	});
}

export default Component;
