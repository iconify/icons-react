import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bggxg9bow.css';
import '../../css/e/egneazb5l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bggxg9bow"/><path class="egneazb5l"/></g>`,
		"fallback": "at-icons:file-image",
	});
}

export default Component;
