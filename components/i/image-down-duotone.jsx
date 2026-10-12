import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iyss807dj.css';
import '../../css/r/r5vy7v9xa.css';
import '../../css/f/fe81k0bsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iyss807dj"/><path class="r5vy7v9xa"/><path class="fe81k0bsy"/></g>`,
		"fallback": "lucide-extended:image-down-duotone",
	});
}

export default Component;
