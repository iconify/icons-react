import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xb1xpachw.css';
import '../../css/g/gv5gocbpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xb1xpachw"/><path class="gv5gocbpa"/></g>`,
		"fallback": "solar:forward-2-line-duotone",
	});
}

export default Component;
