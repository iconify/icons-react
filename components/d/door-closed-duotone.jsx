import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n0b33wbja.css';
import '../../css/q/qi57hyiwy.css';
import '../../css/x/x33sl95gk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n0b33wbja"/><path class="qi57hyiwy"/><path class="x33sl95gk"/></g>`,
		"fallback": "lucide-extended:door-closed-duotone",
	});
}

export default Component;
