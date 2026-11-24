import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kz6p2kbac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kz6p2kbac"/>`,
		"fallback": "lucide-extended:brush-filled",
	});
}

export default Component;
