import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wd4c-vksa.css';
import '../../css/j/jrp2xebmc.css';
import '../../css/g/gx35_lbkf.css';
import '../../css/p/ph75eacdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wd4c-vksa"/><path class="jrp2xebmc"/><path class="gx35_lbkf"/><path class="ph75eacdc"/></g>`,
		"fallback": "lucide-extended:circle-person-arms-spread-duotone",
	});
}

export default Component;
