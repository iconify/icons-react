import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtt8v1bcn.css';
import '../../css/h/h2cw1srdy.css';
import '../../css/o/o_4o-hjdo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtt8v1bcn"/><path class="h2cw1srdy"/><path class="o_4o-hjdo"/>`,
		"fallback": "energy-icons:crew-transfer-vessel-20-bold",
	});
}

export default Component;
