import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lg2_fzpty.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lg2_fzpty"/>`,
		"fallback": "dinkie-icons:adobe-after-effects-filled",
	});
}

export default Component;
