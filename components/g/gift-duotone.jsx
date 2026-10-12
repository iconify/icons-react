import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/krtu-13-w.css';
import '../../css/x/xpoj7wbil.css';
import '../../css/h/hn0gbhbid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="krtu-13-w"/><path class="xpoj7wbil"/><path class="hn0gbhbid"/></g>`,
		"fallback": "lucide-extended:gift-duotone",
	});
}

export default Component;
