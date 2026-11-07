import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/saeh39c6l.css';
import '../../css/n/n7_fvpbed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="saeh39c6l"/><path class="n7_fvpbed"/></g>`,
		"fallback": "solar:brackets-linear",
	});
}

export default Component;
