import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l7qt79bgg.css';
import '../../css/u/u-1gpfb4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l7qt79bgg"/><path class="u-1gpfb4i"/></g>`,
		"fallback": "lucide-extended:form-duotone",
	});
}

export default Component;
