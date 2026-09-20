import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cs-kibb1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cs-kibb1m"/>`,
		"fallback": "lucide:chevron-up",
	});
}

export default Component;
