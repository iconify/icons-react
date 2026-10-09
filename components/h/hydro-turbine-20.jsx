import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yz9qrsbef.css';
import '../../css/b/bsrrsx78k.css';
import '../../css/t/tm2j37b_o.css';
import '../../css/t/te0eh-jxh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yz9qrsbef"/><path class="bsrrsx78k"/><path class="tm2j37b_o"/><path class="te0eh-jxh"/>`,
		"fallback": "energy-icons:hydro-turbine-20",
	});
}

export default Component;
