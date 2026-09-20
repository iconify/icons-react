import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kr__f9beo.css';
import '../../css/t/t3pi35bue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kr__f9beo"/><path class="t3pi35bue"/></g>`,
		"fallback": "proicons:cancel-octagon",
	});
}

export default Component;
