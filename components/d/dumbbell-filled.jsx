import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j13j-opwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j13j-opwu"/>`,
		"fallback": "lucide-extended:dumbbell-filled",
	});
}

export default Component;
