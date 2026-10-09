import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2pqw85-k.css';
import '../../css/h/h5hitcc0j.css';
import '../../css/i/i_fu6kg3l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2pqw85-k"/><path class="h5hitcc0j"/><path class="i_fu6kg3l"/>`,
		"fallback": "energy-icons:energy-trading-20-bold",
	});
}

export default Component;
