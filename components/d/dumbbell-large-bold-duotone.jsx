import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pe1_8wbka.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/k/k0sy36bsy.css';
import '../../css/t/tpzwl1bnq.css';
import '../../css/g/g-ond2cfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="pe1_8wbka"/><g class="mc2zb0bvp"><path class="k0sy36bsy"/><path class="tpzwl1bnq"/><path class="g-ond2cfc"/></g></g>`,
		"fallback": "solar:dumbbell-large-bold-duotone",
	});
}

export default Component;
