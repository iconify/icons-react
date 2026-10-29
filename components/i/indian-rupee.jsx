import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llofso-bc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="llofso-bc"/>`,
		"fallback": "lucide:indian-rupee",
	});
}

export default Component;
