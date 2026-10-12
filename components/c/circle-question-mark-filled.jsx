import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oal6mpb4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oal6mpb4h"/>`,
		"fallback": "lucide-extended:circle-question-mark-filled",
	});
}

export default Component;
