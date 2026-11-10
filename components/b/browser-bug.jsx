import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mua0n5teg.css';
import '../../css/v/vx84ykt7c.css';
import '../../css/q/qrofg2d-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mua0n5teg"/><path class="vx84ykt7c"/><path class="qrofg2d-i"/></g>`,
		"fallback": "andrsrxn:browser-bug",
	});
}

export default Component;
