import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrp-pcbtd.css';
import '../../css/e/evoi0uzhs.css';
import '../../css/k/k34k1_ice.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qrp-pcbtd"/><path class="evoi0uzhs"/><path class="k34k1_ice"/>`,
		"fallback": "energy-icons:flywheel-20",
	});
}

export default Component;
