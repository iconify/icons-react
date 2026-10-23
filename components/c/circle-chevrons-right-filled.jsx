import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ssrhi3bta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ssrhi3bta"/>`,
		"fallback": "lucide-extended:circle-chevrons-right-filled",
	});
}

export default Component;
