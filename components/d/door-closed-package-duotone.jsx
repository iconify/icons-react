import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mq7773g4u.css';
import '../../css/y/y_2o_y60p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mq7773g4u"/><path class="y_2o_y60p"/></g>`,
		"fallback": "lucide-extended:door-closed-package-duotone",
	});
}

export default Component;
