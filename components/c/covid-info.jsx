import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/g8qfvnbjm.css';
import '../../css/d/d94ucwrid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="g8qfvnbjm"/><path class="d94ucwrid"/></g>`,
		"fallback": "hugeicons:covid-info",
	});
}

export default Component;
