import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xfm90uetc.css';
import '../../css/r/r-u8q4fvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xfm90uetc"/><path class="r-u8q4fvi"/></g>`,
		"fallback": "lucide-extended:align-vertical-space-between-duotone",
	});
}

export default Component;
