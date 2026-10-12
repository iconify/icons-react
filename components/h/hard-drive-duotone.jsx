import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vez_7om7o.css';
import '../../css/m/mb8xbha0u.css';
import '../../css/c/cp3a_0dpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vez_7om7o"/><path class="mb8xbha0u"/><path class="cp3a_0dpw"/></g>`,
		"fallback": "lucide-extended:hard-drive-duotone",
	});
}

export default Component;
