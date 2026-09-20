import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/u/uoztf63xy.css';
import '../../css/g/gf2jrs6ep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="uoztf63xy"/><path class="gf2jrs6ep"/></g>`,
		"fallback": "keyline-icons:headphones-off-sharp-fill",
	});
}

export default Component;
