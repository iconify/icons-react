import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/ql5evg4og.css';
import '../../css/t/tubu2bhec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ql5evg4og"/><path class="tubu2bhec"/></g>`,
		"fallback": "lucide-extended:carton-duotone",
	});
}

export default Component;
