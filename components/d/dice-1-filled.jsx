import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_jprvp0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e_jprvp0k"/>`,
		"fallback": "lucide-extended:dice-1-filled",
	});
}

export default Component;
