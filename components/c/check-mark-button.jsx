import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ri6kdpb7p.css';
import '../../css/l/lbdau4qka.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ri6kdpb7p"/><path class="lbdau4qka"/></g>`,
		"fallback": "fluent-emoji-flat:check-mark-button",
	});
}

export default Component;
