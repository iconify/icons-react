import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw2_5ib7o.css';
import '../../css/u/ul_8xabfd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gw2_5ib7o"/><path class="ul_8xabfd"/>`,
		"fallback": "energy-icons:air-conditioner-48-bold",
	});
}

export default Component;
