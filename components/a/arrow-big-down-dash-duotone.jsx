import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bcn4dwxnr.css';
import '../../css/w/wu70w2bik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bcn4dwxnr"/><path class="wu70w2bik"/></g>`,
		"fallback": "lucide-extended:arrow-big-down-dash-duotone",
	});
}

export default Component;
