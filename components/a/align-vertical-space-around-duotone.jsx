import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mwx8zub9y.css';
import '../../css/v/vr4vmb5cq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mwx8zub9y"/><path class="vr4vmb5cq"/></g>`,
		"fallback": "lucide-extended:align-vertical-space-around-duotone",
	});
}

export default Component;
