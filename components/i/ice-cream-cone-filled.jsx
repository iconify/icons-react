import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cotn1dbre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cotn1dbre"/>`,
		"fallback": "lucide-extended:ice-cream-cone-filled",
	});
}

export default Component;
