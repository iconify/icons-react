import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qi5-0wb4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qi5-0wb4i"/>`,
		"fallback": "lucide-extended:folder-dot-filled",
	});
}

export default Component;
