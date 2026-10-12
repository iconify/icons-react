import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w35knlh6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w35knlh6k"/>`,
		"fallback": "lucide-extended:bean-off-filled",
	});
}

export default Component;
