import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z8j6ccc5g.css';
import '../../css/t/tnz_2pl9f.css';
import '../../css/x/x3rxkep0w.css';
import '../../css/h/ht6mdpbgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="z8j6ccc5g"/><path class="tnz_2pl9f"/><path class="x3rxkep0w"/><path class="ht6mdpbgs"/></g>`,
		"fallback": "solar:cup-hot-linear",
	});
}

export default Component;
