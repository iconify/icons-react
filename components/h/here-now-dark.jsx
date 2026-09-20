import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdtt5t4xh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdtt5t4xh"/>`,
		"fallback": "selfhst:here-now-dark",
	});
}

export default Component;
