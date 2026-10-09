import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwp3j2jcs.css';
import '../../css/k/k_v0rcc0n.css';
import '../../css/u/usnws24vp.css';
import '../../css/b/bksa0ub5k.css';
import '../../css/f/fy4c6vbwe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwp3j2jcs"/><path class="k_v0rcc0n"/><path class="usnws24vp"/><path class="bksa0ub5k"/><path class="fy4c6vbwe"/>`,
		"fallback": "energy-icons:house-solar-48",
	});
}

export default Component;
