import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozg9svb1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozg9svb1u"/>`,
		"fallback": "lucide-extended:flame-filled",
	});
}

export default Component;
