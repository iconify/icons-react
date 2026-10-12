import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vczeidb3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vczeidb3b"/>`,
		"fallback": "lucide-extended:badge-pound-sterling-filled",
	});
}

export default Component;
