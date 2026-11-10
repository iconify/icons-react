import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lsexowb9i.css';
import '../../css/l/llylfxbgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lsexowb9i"/><path class="llylfxbgo"/></g>`,
		"fallback": "lucide-extended:diagram-flow-horizontal-duotone",
	});
}

export default Component;
