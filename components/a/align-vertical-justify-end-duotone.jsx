import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h38629s4y.css';
import '../../css/v/vv269ibua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h38629s4y"/><path class="vv269ibua"/></g>`,
		"fallback": "lucide-extended:align-vertical-justify-end-duotone",
	});
}

export default Component;
