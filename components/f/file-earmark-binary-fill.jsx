import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kqo1pnb0a.css';
import '../../css/j/j74q-3b6t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kqo1pnb0a"/><path class="j74q-3b6t"/></g>`,
		"fallback": "bi:file-earmark-binary-fill",
	});
}

export default Component;
