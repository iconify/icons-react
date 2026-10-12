import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qbo0_6b1y.css';
import '../../css/g/g9nxjlb6k.css';
import '../../css/c/cm2jootob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qbo0_6b1y"/><path class="g9nxjlb6k"/><path class="cm2jootob"/></g>`,
		"fallback": "lucide-extended:align-vertical-distribute-end-duotone",
	});
}

export default Component;
