import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdmj-0wpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qdmj-0wpx"/>`,
		"fallback": "lucide-extended:ice-cream-bowl-filled",
	});
}

export default Component;
