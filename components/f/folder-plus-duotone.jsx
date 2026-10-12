import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uunxp5n4e.css';
import '../../css/x/x7-tn3b9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uunxp5n4e"/><path class="x7-tn3b9i"/></g>`,
		"fallback": "lucide-extended:folder-plus-duotone",
	});
}

export default Component;
