import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ej2k7tn9b.css';
import '../../css/m/mth6hvbok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ej2k7tn9b"/><path class="mth6hvbok"/></g>`,
		"fallback": "lucide-extended:banana-duotone",
	});
}

export default Component;
