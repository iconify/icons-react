import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d52qlbc5z.css';
import '../../css/g/gx35_lbkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d52qlbc5z"/><path class="gx35_lbkf"/></g>`,
		"fallback": "lucide-extended:circle-letter-i-duotone",
	});
}

export default Component;
