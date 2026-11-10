import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gvbrcnb-r.css';
import '../../css/u/us6vpptzr.css';
import '../../css/p/pd21t8boe.css';
import '../../css/d/dtkzsnbie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gvbrcnb-r"/><path class="us6vpptzr"/><path class="pd21t8boe"/><path class="dtkzsnbie"/></g>`,
		"fallback": "andrsrxn:credit-card-search",
	});
}

export default Component;
