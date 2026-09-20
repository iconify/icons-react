import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zrpmm7bkk.css';
import '../../css/q/qqtepqb8i.css';
import '../../css/l/luu53hbat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zrpmm7bkk"/><path class="qqtepqb8i"/><path class="luu53hbat"/></g>`,
		"fallback": "solar:exit-broken",
	});
}

export default Component;
