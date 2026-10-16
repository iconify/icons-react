import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sadt3upzd.css';
import '../../css/o/o1h120bif.css';
import '../../css/f/fa2x_hb5l.css';
import '../../css/v/vy4lfsb_n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sadt3upzd"/><path class="o1h120bif"/><path class="fa2x_hb5l"/><path class="vy4lfsb_n"/>`,
		"fallback": "energy-icons:ceiling-fan-48-bold",
	});
}

export default Component;
