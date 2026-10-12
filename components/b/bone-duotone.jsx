import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/ht-29mfky.css';
import '../../css/l/l-oxs4m5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ht-29mfky"/><path class="l-oxs4m5e"/></g>`,
		"fallback": "lucide-extended:bone-duotone",
	});
}

export default Component;
