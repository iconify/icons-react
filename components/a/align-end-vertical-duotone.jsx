import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m6br1mivf.css';
import '../../css/o/oo7385bdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m6br1mivf"/><path class="oo7385bdr"/></g>`,
		"fallback": "lucide-extended:align-end-vertical-duotone",
	});
}

export default Component;
