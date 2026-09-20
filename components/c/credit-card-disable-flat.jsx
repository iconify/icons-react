import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d2hpjkhee.css';
import '../../css/r/rbfv-bbvh.css';
import '../../css/m/mbyfj-ygn.css';
import '../../css/g/gokt_8auk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d2hpjkhee"/><path clip-rule="evenodd" class="rbfv-bbvh"/><path clip-rule="evenodd" class="mbyfj-ygn"/><path clip-rule="evenodd" class="gokt_8auk"/></g>`,
		"fallback": "streamline-flex-color:credit-card-disable-flat",
	});
}

export default Component;
