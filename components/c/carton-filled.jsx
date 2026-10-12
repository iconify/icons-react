import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flgd7161p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="flgd7161p"/>`,
		"fallback": "lucide-extended:carton-filled",
	});
}

export default Component;
