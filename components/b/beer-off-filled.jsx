import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwieclb2b.css';
import '../../css/i/i26zuu1we.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rwieclb2b"/><path class="i26zuu1we"/>`,
		"fallback": "lucide-extended:beer-off-filled",
	});
}

export default Component;
