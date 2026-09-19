import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yylgmr2nv.css';
import '../../css/y/yvj11htlz.css';
import '../../css/g/glhzmfa1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="yylgmr2nv"/><path class="yvj11htlz"/><path class="glhzmfa1d"/></g>`,
		"fallback": "covid:covid19-virus-heal-2",
	});
}

export default Component;
