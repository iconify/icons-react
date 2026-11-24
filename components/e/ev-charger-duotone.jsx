import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ccs6zabjh.css';
import '../../css/f/f6z_ndbaz.css';
import '../../css/n/n-ot9ub2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ccs6zabjh"/><path class="f6z_ndbaz"/><path class="n-ot9ub2j"/></g>`,
		"fallback": "lucide-extended:ev-charger-duotone",
	});
}

export default Component;
