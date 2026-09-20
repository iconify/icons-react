import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/m/mc8x2ab8f.css';
import '../../css/k/kxnhi_bei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="mc8x2ab8f"/><path class="kxnhi_bei"/></g>`,
		"fallback": "keyline-icons:buildings-sharp-duotone",
	});
}

export default Component;
