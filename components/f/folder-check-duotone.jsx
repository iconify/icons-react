import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y7rf6wbpp.css';
import '../../css/x/x7-tn3b9i.css';
import '../../css/c/cc637x-tb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y7rf6wbpp"/><path class="x7-tn3b9i"/><path class="cc637x-tb"/></g>`,
		"fallback": "lucide-extended:folder-check-duotone",
	});
}

export default Component;
