import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3k0r13bp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j3k0r13bp"/>`,
		"fallback": "lucide-extended:container-filled",
	});
}

export default Component;
