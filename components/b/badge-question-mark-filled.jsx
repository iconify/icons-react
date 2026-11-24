import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whk1n9bbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="whk1n9bbd"/>`,
		"fallback": "lucide-extended:badge-question-mark-filled",
	});
}

export default Component;
