import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kt_n8sqbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kt_n8sqbz"/>`,
		"fallback": "lucide-extended:carets-to-axis-vertical-filled",
	});
}

export default Component;
