import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l31hi9byg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l31hi9byg"/>`,
		"fallback": "zondicons:credit-card",
	});
}

export default Component;
