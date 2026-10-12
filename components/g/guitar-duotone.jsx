import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h9nebbbvn.css';
import '../../css/z/zmj88ohhd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h9nebbbvn"/><path class="zmj88ohhd"/></g>`,
		"fallback": "lucide-extended:guitar-duotone",
	});
}

export default Component;
