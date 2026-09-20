import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti2jc9bbd.css';
import '../../css/p/p1sjyybhn.css';
import '../../css/o/onse16b0q.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ti2jc9bbd"/><path class="p1sjyybhn"/><path class="onse16b0q"/>`,
		"fallback": "medical-icon:i-medical-records",
	});
}

export default Component;
