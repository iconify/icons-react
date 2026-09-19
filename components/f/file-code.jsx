import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/egneazb5l.css';
import '../../css/z/zfmnccc8g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="egneazb5l"/><path class="zfmnccc8g"/></g>`,
		"fallback": "at-icons:file-code",
	});
}

export default Component;
