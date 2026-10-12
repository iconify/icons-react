import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tlyjcs62h.css';
import '../../css/a/alfccoboa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tlyjcs62h"/><path class="alfccoboa"/></g>`,
		"fallback": "lucide-extended:gamepad-directional-duotone",
	});
}

export default Component;
