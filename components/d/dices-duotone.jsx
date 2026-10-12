import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nwg9p5dzv.css';
import '../../css/v/vhrm6lbpx.css';
import '../../css/f/fvw1smy5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nwg9p5dzv"/><path class="vhrm6lbpx"/><path class="fvw1smy5q"/></g>`,
		"fallback": "lucide-extended:dices-duotone",
	});
}

export default Component;
