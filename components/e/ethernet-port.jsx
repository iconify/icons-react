import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u721d8zll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u721d8zll"/>`,
		"fallback": "hugeicons:ethernet-port",
	});
}

export default Component;
