import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzzmtyb6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fzzmtyb6v"/>`,
		"fallback": "lucide-extended:globe-code-filled",
	});
}

export default Component;
