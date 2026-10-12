import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-6wqibix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x-6wqibix"/>`,
		"fallback": "lucide-extended:folder-up-filled",
	});
}

export default Component;
