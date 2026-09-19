import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/f/fygymggnq.css';
import '../../css/e/e073xiy2p.css';
import '../../css/p/pfrgd_vdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="fygymggnq"/><path class="e073xiy2p"/><path class="pfrgd_vdk"/></g>`,
		"fallback": "hugeicons:alphabet-hindi",
	});
}

export default Component;
