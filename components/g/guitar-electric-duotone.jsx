import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xf-nc-8xs.css';
import '../../css/h/hc78j__mk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xf-nc-8xs"/><path class="hc78j__mk"/></g>`,
		"fallback": "lucide-extended:guitar-electric-duotone",
	});
}

export default Component;
