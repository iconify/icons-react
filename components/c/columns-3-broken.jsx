import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bfsv7cc4c.css';
import '../../css/m/ml0cb1b5h.css';
import '../../css/h/h111i6rqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bfsv7cc4c"/><path class="ml0cb1b5h"/><path class="h111i6rqf"/></g>`,
		"fallback": "solar:columns-3-broken",
	});
}

export default Component;
