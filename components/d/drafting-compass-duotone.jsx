import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gyk2s_7ar.css';
import '../../css/f/f7z738f6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gyk2s_7ar"/><path class="f7z738f6e"/></g>`,
		"fallback": "lucide-extended:drafting-compass-duotone",
	});
}

export default Component;
