import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtrl803vx.css';
import '../../css/e/e0-stmb3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtrl803vx"/><path clip-rule="evenodd" class="e0-stmb3e"/>`,
		"fallback": "lucide-extended:banknote-arrow-up-filled",
	});
}

export default Component;
