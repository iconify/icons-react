import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/tglxzvbqv.css';
import '../../css/w/wd84n_baq.css';
import '../../css/i/inro79bve.css';
import '../../css/t/twegkvbfq.css';
import '../../css/p/pcdyyib2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="tglxzvbqv wm-shadow"/><path class="wd84n_baq wm-shadow"/><path class="inro79bve"/><path class="twegkvbfq"/><path class="pcdyyib2z"/></g>`,
		"fallback": "withicons-brutal:hand-heart",
	});
}

export default Component;
