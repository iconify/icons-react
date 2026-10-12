import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ao6xx6nbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ao6xx6nbg"/>`,
		"fallback": "lucide-extended:ghost-filled",
	});
}

export default Component;
