import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwaar8x-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jwaar8x-k"/>`,
		"fallback": "lucide-extended:circle-x-filled",
	});
}

export default Component;
