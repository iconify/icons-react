import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wi643n5is.css';
import '../../css/x/x_hpbztkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wi643n5is"/><path class="x_hpbztkk"/></g>`,
		"fallback": "solar:export-broken",
	});
}

export default Component;
