import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfr8ahb9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfr8ahb9q"/>`,
		"fallback": "lucide-extended:dumbbell-filled",
	});
}

export default Component;
