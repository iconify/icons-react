import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyr_tub4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tyr_tub4z"/>`,
		"fallback": "noviair:ev-charger",
	});
}

export default Component;
