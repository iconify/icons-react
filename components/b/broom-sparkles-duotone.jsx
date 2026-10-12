import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cmi_9mb1y.css';
import '../../css/l/l8h9pbc3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cmi_9mb1y"/><path class="l8h9pbc3s"/></g>`,
		"fallback": "lucide-extended:broom-sparkles-duotone",
	});
}

export default Component;
