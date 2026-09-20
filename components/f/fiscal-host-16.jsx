import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1hpn4bjj.css';
import '../../css/w/w_0godbis.css';
import '../../css/a/asyhpobbc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o1hpn4bjj"/><path class="w_0godbis"/><path class="asyhpobbc"/>`,
		"fallback": "octicon:fiscal-host-16",
	});
}

export default Component;
