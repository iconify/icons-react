import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjv4dy7qr.css';
import '../../css/a/adqsiqg3s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjv4dy7qr"/><path class="adqsiqg3s"/>`,
		"fallback": "energy-icons:caliper-20-bold",
	});
}

export default Component;
