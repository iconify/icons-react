import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fiz6rvb5o.css';
import '../../css/s/s93rtjb8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fiz6rvb5o"/><path class="s93rtjb8w"/></g>`,
		"fallback": "solar:backspace-line-duotone",
	});
}

export default Component;
