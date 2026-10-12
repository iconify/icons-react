import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j9naxgbvw.css';
import '../../css/s/s2wy1hqyp.css';
import '../../css/s/suj28i7eb.css';
import '../../css/w/wqh43v1wb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j9naxgbvw"/><path class="s2wy1hqyp"/><path class="suj28i7eb"/><path class="wqh43v1wb"/></g>`,
		"fallback": "andrsrxn:file-cube",
	});
}

export default Component;
