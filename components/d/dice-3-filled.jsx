import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6u7_lbof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c6u7_lbof"/>`,
		"fallback": "lucide-extended:dice-3-filled",
	});
}

export default Component;
