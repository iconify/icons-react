import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kip_gc83p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kip_gc83p"/>`,
		"fallback": "lucide-extended:book-up-filled",
	});
}

export default Component;
