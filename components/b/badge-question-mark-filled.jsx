import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_gkf5rlf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a_gkf5rlf"/>`,
		"fallback": "lucide-extended:badge-question-mark-filled",
	});
}

export default Component;
