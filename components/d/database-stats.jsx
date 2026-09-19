import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v_wvpib4a.css';
import '../../css/m/mpo63bcwo.css';
import '../../css/n/nhfue6ory.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="v_wvpib4a"/><path class="mpo63bcwo"/><path class="nhfue6ory"/></g>`,
		"fallback": "iconoir:database-stats",
	});
}

export default Component;
