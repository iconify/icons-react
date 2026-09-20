import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/d/de9-pqbfb.css';
import '../../css/u/ub5r4dgcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="de9-pqbfb"/><path class="ub5r4dgcc"/></g>`,
		"fallback": "keyline-icons:bracket-arrow-right-sharp-duotone",
	});
}

export default Component;
