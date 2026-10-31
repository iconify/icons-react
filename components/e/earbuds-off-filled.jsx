import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7ymvtb1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7ymvtb1y"/>`,
		"fallback": "lucide-extended:earbuds-off-filled",
	});
}

export default Component;
