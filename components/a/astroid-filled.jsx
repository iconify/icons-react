import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pw-8x5o7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pw-8x5o7l"/>`,
		"fallback": "lucide-extended:astroid-filled",
	});
}

export default Component;
