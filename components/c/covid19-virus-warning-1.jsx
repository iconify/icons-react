import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yylgmr2nv.css';
import '../../css/c/c9obvju-w.css';
import '../../css/r/r4dmb4bvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="yylgmr2nv"/><path class="c9obvju-w"/><path class="r4dmb4bvu"/></g>`,
		"fallback": "covid:covid19-virus-warning-1",
	});
}

export default Component;
