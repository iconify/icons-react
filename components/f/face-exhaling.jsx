import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aw66flb6x.css';
import '../../css/p/p8arhnbml.css';
import '../../css/c/cqkfiyb4q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="aw66flb6x"/><path class="p8arhnbml"/><path class="cqkfiyb4q"/></g>`,
		"fallback": "fluent-emoji-high-contrast:face-exhaling",
	});
}

export default Component;
