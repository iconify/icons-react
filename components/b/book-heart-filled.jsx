import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkz8wob9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wkz8wob9a"/>`,
		"fallback": "lucide-extended:book-heart-filled",
	});
}

export default Component;
