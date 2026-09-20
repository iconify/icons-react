import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ccnryb0mq.css';
import '../../css/g/gfkm5ms4h.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="ccnryb0mq"/><path class="gfkm5ms4h"/></g>`,
		"fallback": "skill-icons:illustrator",
	});
}

export default Component;
