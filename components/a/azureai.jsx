import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mu0x0scgz.css';
import '../../css/c/c2794gbjv.css';
import '../../css/g/g0oi4znzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path clip-rule="evenodd" class="mu0x0scgz"/><path class="c2794gbjv"/><path clip-rule="evenodd" class="g0oi4znzq"/></g>`,
		"fallback": "thesvg:azureai",
	});
}

export default Component;
