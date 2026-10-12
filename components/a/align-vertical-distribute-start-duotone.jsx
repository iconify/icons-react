import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ee07y_olu.css';
import '../../css/g/g9nxjlb6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ee07y_olu"/><path class="g9nxjlb6k"/></g>`,
		"fallback": "lucide-extended:align-vertical-distribute-start-duotone",
	});
}

export default Component;
