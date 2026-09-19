import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lxeer2b8m.css';
import '../../css/v/v7punz0qn.css';
import '../../css/f/fh38--b_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lxeer2b8m"/><path class="v7punz0qn"/><path class="fh38--b_a"/></g>`,
		"fallback": "hugeicons:chemistry-03",
	});
}

export default Component;
