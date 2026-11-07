import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lvf1bvybk.css';
import '../../css/s/s93rtjb8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lvf1bvybk"/><path class="s93rtjb8w"/></g>`,
		"fallback": "solar:backspace-broken",
	});
}

export default Component;
