import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aczw4yb8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aczw4yb8r"/>`,
		"fallback": "lucide:arrows-to-axis-horizontal",
	});
}

export default Component;
