import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbqm40wsr.css';
import '../../css/x/xgj3z1bgb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbqm40wsr"/><path class="xgj3z1bgb"/>`,
		"fallback": "cil:credit-card",
	});
}

export default Component;
