import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6hxx9b_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q6hxx9b_c"/>`,
		"fallback": "lucide-extended:banana-filled",
	});
}

export default Component;
