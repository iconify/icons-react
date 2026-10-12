import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eu2r_83ly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eu2r_83ly"/>`,
		"fallback": "lucide-extended:computer-filled",
	});
}

export default Component;
