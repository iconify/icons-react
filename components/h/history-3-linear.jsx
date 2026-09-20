import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/le3r5qgra.css';
import '../../css/g/gjo1tztxm.css';
import '../../css/u/uqhik9b3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="le3r5qgra"/><path class="gjo1tztxm"/><path class="uqhik9b3f"/></g>`,
		"fallback": "solar:history-3-linear",
	});
}

export default Component;
