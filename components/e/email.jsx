import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h37qctsio.css';
import '../../css/x/xzdkyp4ub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><rect class="h37qctsio"/><path class="xzdkyp4ub"/></g>`,
		"fallback": "mage:email",
	});
}

export default Component;
