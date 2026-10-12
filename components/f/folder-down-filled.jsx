import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pp1g86hto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pp1g86hto"/>`,
		"fallback": "lucide-extended:folder-down-filled",
	});
}

export default Component;
