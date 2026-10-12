import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sp-zmb43i.css';
import '../../css/i/iw329sbdq.css';
import '../../css/d/da6eg2b0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sp-zmb43i"/><path class="iw329sbdq"/><path class="da6eg2b0n"/></g>`,
		"fallback": "lucide-extended:grid-2x2-plus-duotone",
	});
}

export default Component;
