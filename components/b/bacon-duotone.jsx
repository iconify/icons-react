import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y28h9ac_m.css';
import '../../css/c/coyibebhn.css';
import '../../css/d/djlh71bkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y28h9ac_m"/><path class="coyibebhn"/><path class="djlh71bkn"/></g>`,
		"fallback": "lucide-extended:bacon-duotone",
	});
}

export default Component;
