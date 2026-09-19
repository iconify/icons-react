import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rdqs5tejd.css';
import '../../css/z/z_2e8jbtr.css';
import '../../css/e/egneazb5l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rdqs5tejd"/><path class="z_2e8jbtr"/><path class="egneazb5l"/></g>`,
		"fallback": "at-icons:file-arrow-up-left",
	});
}

export default Component;
