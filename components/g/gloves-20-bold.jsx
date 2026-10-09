import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhkum03mr.css';
import '../../css/k/k_bic86zu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhkum03mr"/><path class="k_bic86zu"/>`,
		"fallback": "energy-icons:gloves-20-bold",
	});
}

export default Component;
