import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zatu3h8ah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zatu3h8ah"/>`,
		"fallback": "lucide:arrow-up-down",
	});
}

export default Component;
