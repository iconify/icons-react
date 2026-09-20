import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nolfx4b0d.css';
import '../../css/y/ys3yk5bwx.css';
import '../../css/l/llaf8kysj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nolfx4b0d"/><path class="ys3yk5bwx"/><path class="llaf8kysj"/></g>`,
		"fallback": "solar:brain-broken",
	});
}

export default Component;
