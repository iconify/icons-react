import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bl7t7bcab.css';
import '../../css/r/rfq5w3-_l.css';
import '../../css/b/bihh6vetq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bl7t7bcab"/><path class="rfq5w3-_l"/><path class="bihh6vetq"/></g>`,
		"fallback": "andrsrxn:bookmarks",
	});
}

export default Component;
