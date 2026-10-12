import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dx7l5abtr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dx7l5abtr"/>`,
		"fallback": "lucide-extended:book-open-text-filled",
	});
}

export default Component;
