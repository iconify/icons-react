import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/b/ba4rp2-no.css';
import '../../css/u/usv5w9-bv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ba4rp2-no"/><path class="usv5w9-bv"/></g>`,
		"fallback": "keyline-icons:bell-off-sharp-fill",
	});
}

export default Component;
