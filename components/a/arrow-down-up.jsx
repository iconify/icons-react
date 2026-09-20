import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czbzcw-8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czbzcw-8u"/>`,
		"fallback": "lucide:arrow-down-up",
	});
}

export default Component;
