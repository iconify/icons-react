import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5fytvx5z.css';
import '../../css/s/s8208dgjy.css';
import '../../css/l/lxculd_tv.css';
import '../../css/x/xh5w7ub4h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5fytvx5z"/><path class="s8208dgjy"/><path class="lxculd_tv"/><path class="xh5w7ub4h"/>`,
		"fallback": "energy-icons:abacus-20-bold",
	});
}

export default Component;
