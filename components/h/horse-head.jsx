import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hx8n5wbth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hx8n5wbth"/>`,
		"fallback": "hugeicons:horse-head",
	});
}

export default Component;
