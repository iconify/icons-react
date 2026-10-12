import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/js62l7p9j.css';
import '../../css/x/x5r3d6bgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="js62l7p9j"/><path class="x5r3d6bgi"/></g>`,
		"fallback": "lucide-extended:bow-arrow-duotone",
	});
}

export default Component;
