import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly9882b_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ly9882b_u"/>`,
		"fallback": "lucide:chevrons-to-axis-dashed-horizontal",
	});
}

export default Component;
