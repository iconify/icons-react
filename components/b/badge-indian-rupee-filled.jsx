import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dh-c-ubmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dh-c-ubmz"/>`,
		"fallback": "lucide-extended:badge-indian-rupee-filled",
	});
}

export default Component;
