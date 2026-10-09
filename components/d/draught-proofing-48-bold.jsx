import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_-7pbckv.css';
import '../../css/p/p39fyrbdm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_-7pbckv"/><path class="p39fyrbdm"/>`,
		"fallback": "energy-icons:draught-proofing-48-bold",
	});
}

export default Component;
