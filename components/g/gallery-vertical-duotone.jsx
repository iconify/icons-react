import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nvc1yyymo.css';
import '../../css/c/c6lh6cqlm.css';
import '../../css/d/da1rzrbyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nvc1yyymo"/><path class="c6lh6cqlm"/><path class="da1rzrbyh"/></g>`,
		"fallback": "lucide-extended:gallery-vertical-duotone",
	});
}

export default Component;
