import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyzks5_zi.css';
import '../../css/a/am6js3l0a.css';
import '../../css/l/lxo1cx_dt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lyzks5_zi"/><path class="am6js3l0a"/><path class="lxo1cx_dt"/>`,
		"fallback": "energy-icons:buoy-20-bold",
	});
}

export default Component;
