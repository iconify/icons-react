import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nockl6-tb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nockl6-tb"/>`,
		"fallback": "lucide-extended:bookmark-plus-filled",
	});
}

export default Component;
