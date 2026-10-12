import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v28la4rjs.css';
import '../../css/o/ope2fnbmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v28la4rjs"/><path class="ope2fnbmt"/></g>`,
		"fallback": "lucide-extended:calculator-duotone",
	});
}

export default Component;
