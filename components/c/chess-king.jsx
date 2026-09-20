import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxc1niezf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxc1niezf"/>`,
		"fallback": "lucide:chess-king",
	});
}

export default Component;
