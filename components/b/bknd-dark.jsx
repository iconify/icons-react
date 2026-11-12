import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uk7b67bxo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uk7b67bxo"/>`,
		"fallback": "selfhst:bknd-dark",
	});
}

export default Component;
