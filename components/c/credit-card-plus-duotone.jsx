import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ra0vxpf9f.css';
import '../../css/j/joz_vvjya.css';
import '../../css/p/pb8-3nbrq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ra0vxpf9f"/><path class="joz_vvjya"/><path class="pb8-3nbrq"/></g>`,
		"fallback": "lucide-extended:credit-card-plus-duotone",
	});
}

export default Component;
