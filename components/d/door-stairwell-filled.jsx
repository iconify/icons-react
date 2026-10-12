import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uuff21y9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uuff21y9o"/>`,
		"fallback": "lucide-extended:door-stairwell-filled",
	});
}

export default Component;
