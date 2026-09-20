import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l-5lbndex.css';
import '../../css/o/oe2fmx3ou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="ft5dv1b6b"><path class="l-5lbndex"/><path class="oe2fmx3ou"/></g>`,
		"fallback": "si:cloud-duotone",
	});
}

export default Component;
