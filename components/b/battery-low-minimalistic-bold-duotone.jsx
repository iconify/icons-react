import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eooclpefv.css';
import '../../css/l/l_ge0bc2p.css';
import '../../css/v/vt85r8b-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eooclpefv"/><path class="l_ge0bc2p"/><path class="vt85r8b-d"/>`,
		"fallback": "solar:battery-low-minimalistic-bold-duotone",
	});
}

export default Component;
