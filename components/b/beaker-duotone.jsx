import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uasldos5y.css';
import '../../css/k/k81kglbwn.css';
import '../../css/s/sa6p2-b3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uasldos5y"/><path class="k81kglbwn"/><path class="sa6p2-b3p"/></g>`,
		"fallback": "lucide-extended:beaker-duotone",
	});
}

export default Component;
