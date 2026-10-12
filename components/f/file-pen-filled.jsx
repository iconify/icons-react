import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fylc7j5wh.css';
import '../../css/r/rn0ksnpzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fylc7j5wh"/><path class="rn0ksnpzr"/>`,
		"fallback": "lucide-extended:file-pen-filled",
	});
}

export default Component;
