import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ai-ap6q9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ai-ap6q9e"/>`,
		"fallback": "lucide-extended:cat-filled",
	});
}

export default Component;
