import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmfq-m5sp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dmfq-m5sp"/>`,
		"fallback": "lucide-extended:bot-message-square-filled",
	});
}

export default Component;
