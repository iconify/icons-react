import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llxc-801q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="llxc-801q"/>`,
		"fallback": "lucide-extended:circle-chevrons-down-filled",
	});
}

export default Component;
