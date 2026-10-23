import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bwzuzjkxa.css';
import '../../css/q/qoa0stb0u.css';
import '../../css/k/kk9rwuwpp.css';
import '../../css/a/a0pv0abyd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(1 0 .02944 .99957 16.34 14.93)" class="bwzuzjkxa"/><rect transform="matrix(1 0 .02944 .99957 1.67 15.12)" class="bwzuzjkxa"/><path class="qoa0stb0u"/><path class="kk9rwuwpp"/><path class="a0pv0abyd"/></g>`,
		"fallback": "andrsrxn:dinner",
	});
}

export default Component;
