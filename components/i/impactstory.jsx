import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nolgd_b3f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nolgd_b3f"/>`,
		"fallback": "academicons:impactstory",
	});
}

export default Component;
