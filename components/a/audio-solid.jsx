import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fk7zj1gsg.css';
import '../../css/k/kail4jbtw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fk7zj1gsg"/><path class="kail4jbtw"/></g>`,
		"fallback": "rivet-icons:audio-solid",
	});
}

export default Component;
