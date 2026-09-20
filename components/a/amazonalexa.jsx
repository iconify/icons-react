import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/si3f62bwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="si3f62bwy"/>`,
		"fallback": "simple-icons:amazonalexa",
	});
}

export default Component;
