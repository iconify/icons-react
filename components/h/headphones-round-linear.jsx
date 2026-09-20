import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r50k8nbna.css';
import '../../css/i/i2q3oaceu.css';
import '../../css/w/wvwojyb1o.css';
import '../../css/g/gss1pq6sj.css';
import '../../css/x/x4tkz9bbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="r50k8nbna"/><path class="i2q3oaceu"/><path class="wvwojyb1o"/><path class="gss1pq6sj"/><path class="x4tkz9bbr"/></g>`,
		"fallback": "solar:headphones-round-linear",
	});
}

export default Component;
