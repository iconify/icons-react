import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/eep0cg56r.css';
import '../../css/g/gm9yycbjl.css';
import '../../css/p/pqqc-y78h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="eep0cg56r"/><path class="gm9yycbjl"/><path class="pqqc-y78h"/></g>`,
		"fallback": "hugeicons:cheese-cake-01",
	});
}

export default Component;
