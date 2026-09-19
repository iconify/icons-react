import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/trh1kueif.css';
import '../../css/p/pt_w-kkkj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="trh1kueif"/><path class="pt_w-kkkj"/></g>`,
		"fallback": "at-icons:arrow-right-to-bracket",
	});
}

export default Component;
