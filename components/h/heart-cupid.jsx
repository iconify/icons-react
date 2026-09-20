import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cpozj2bwc.css';
import '../../css/y/yvr-6_iby.css';
import '../../css/o/odt3z9bir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cpozj2bwc"/><path class="yvr-6_iby"/><path class="odt3z9bir"/></g>`,
		"fallback": "streamline-cyber-color:heart-cupid",
	});
}

export default Component;
