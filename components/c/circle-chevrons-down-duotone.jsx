import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gx35_lbkf.css';
import '../../css/w/wufcgxb8s.css';
import '../../css/j/jrp2xebmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gx35_lbkf"/><path class="wufcgxb8s"/><path class="jrp2xebmc"/></g>`,
		"fallback": "lucide-extended:circle-chevrons-down-duotone",
	});
}

export default Component;
