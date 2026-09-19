import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ri6kdpb7p.css';
import '../../css/j/j72sud03r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ri6kdpb7p"/><path class="j72sud03r"/></g>`,
		"fallback": "fluent-emoji-flat:chart-increasing-with-yen",
	});
}

export default Component;
