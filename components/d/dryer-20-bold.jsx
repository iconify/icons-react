import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmo-gj4um.css';
import '../../css/t/t0j6e-buy.css';
import '../../css/y/y00054bdm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmo-gj4um"/><path class="t0j6e-buy"/><path class="y00054bdm"/>`,
		"fallback": "energy-icons:dryer-20-bold",
	});
}

export default Component;
