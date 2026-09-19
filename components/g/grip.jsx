import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lead8bc5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lead8bc5k"/>`,
		"fallback": "hugeicons:grip",
	});
}

export default Component;
