import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2jz_ccif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u2jz_ccif"/>`,
		"fallback": "lucide-extended:contact-round-filled",
	});
}

export default Component;
