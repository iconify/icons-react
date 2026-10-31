import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h083lj9da.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h083lj9da"/>`,
		"fallback": "coolicons:cookie-round",
	});
}

export default Component;
