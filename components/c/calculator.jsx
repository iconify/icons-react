import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wt88iibqu.css';
import '../../css/n/nsbcuotwt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wt88iibqu"/><path class="nsbcuotwt"/>`,
		"fallback": "cil:calculator",
	});
}

export default Component;
