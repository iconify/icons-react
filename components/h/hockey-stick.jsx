import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rn_m4cbcl.css';
import '../../css/v/vy1v6kb8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rn_m4cbcl"/><ellipse class="vy1v6kb8v"/></g>`,
		"fallback": "lucide:hockey-stick",
	});
}

export default Component;
