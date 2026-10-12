import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j19sb1b9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j19sb1b9n"/>`,
		"fallback": "lucide-extended:git-pull-request-closed-filled",
	});
}

export default Component;
