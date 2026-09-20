import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idq7gnb6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idq7gnb6z"/>`,
		"fallback": "lucide:arrow-right-from-line",
	});
}

export default Component;
