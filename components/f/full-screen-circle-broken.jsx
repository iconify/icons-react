import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nerijcc5y.css';
import '../../css/g/gqca22zsx.css';
import '../../css/f/f69dim7yf.css';
import '../../css/k/k1rt0cbye.css';
import '../../css/k/ko6o-6b9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nerijcc5y"/><path class="gqca22zsx"/><path class="f69dim7yf"/><path class="k1rt0cbye"/><path class="ko6o-6b9b"/></g>`,
		"fallback": "solar:full-screen-circle-broken",
	});
}

export default Component;
