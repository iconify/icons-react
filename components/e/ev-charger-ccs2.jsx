import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhrmt3b3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhrmt3b3m"/>`,
		"fallback": "mdi:ev-charger-ccs2",
	});
}

export default Component;
