import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/z/z_zygfbdd.css';
import '../../css/e/elgskmn3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="z_zygfbdd"/><path class="elgskmn3y"/></g>`,
		"fallback": "keyline-icons:building-sharp-duotone",
	});
}

export default Component;
