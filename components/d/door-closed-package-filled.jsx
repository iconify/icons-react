import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iq0ba4bnx.css';
import '../../css/f/fu6wn7bkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iq0ba4bnx"/><path class="fu6wn7bkg"/>`,
		"fallback": "lucide-extended:door-closed-package-filled",
	});
}

export default Component;
