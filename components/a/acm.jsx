import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mllt-6bis.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mllt-6bis"/>`,
		"fallback": "academicons:acm",
	});
}

export default Component;
