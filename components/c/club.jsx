import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4uhf6e_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4uhf6e_n"/>`,
		"fallback": "lucide:club",
	});
}

export default Component;
