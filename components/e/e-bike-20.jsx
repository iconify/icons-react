import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9t85dndy.css';
import '../../css/d/d2s5accoq.css';
import '../../css/z/zfpn40e7q.css';
import '../../css/r/rj8pwo61t.css';
import '../../css/h/hq6hy3pct.css';
import '../../css/c/c87a6mo1v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9t85dndy"/><path class="d2s5accoq"/><path class="zfpn40e7q"/><path class="rj8pwo61t"/><path class="hq6hy3pct"/><path class="c87a6mo1v"/>`,
		"fallback": "energy-icons:e-bike-20",
	});
}

export default Component;
