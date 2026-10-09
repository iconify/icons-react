import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec_hp_w4i.css';
import '../../css/m/mh6unsbvq.css';
import '../../css/q/qk2_ljb_l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec_hp_w4i"/><path class="mh6unsbvq"/><path class="qk2_ljb_l"/>`,
		"fallback": "energy-icons:hydrogen-station-48-bold",
	});
}

export default Component;
