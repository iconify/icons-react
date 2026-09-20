import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bis_l5bws.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bis_l5bws"/>`,
		"fallback": "selfhst:costco-dark",
	});
}

export default Component;
