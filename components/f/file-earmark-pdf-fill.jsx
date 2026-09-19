import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yibcgbc2y.css';
import '../../css/f/faqajp34x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yibcgbc2y"/><path class="faqajp34x"/></g>`,
		"fallback": "bi:file-earmark-pdf-fill",
	});
}

export default Component;
