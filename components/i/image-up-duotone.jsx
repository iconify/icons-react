import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iyss807dj.css';
import '../../css/c/clm3_tb7h.css';
import '../../css/f/fe81k0bsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iyss807dj"/><path class="clm3_tb7h"/><path class="fe81k0bsy"/></g>`,
		"fallback": "lucide-extended:image-up-duotone",
	});
}

export default Component;
