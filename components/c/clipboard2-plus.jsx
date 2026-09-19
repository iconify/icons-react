import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/za0zhmbnj.css';
import '../../css/t/t9kfpgbow.css';
import '../../css/d/d7ml33u9q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="za0zhmbnj"/><path class="t9kfpgbow"/><path class="d7ml33u9q"/></g>`,
		"fallback": "bi:clipboard2-plus",
	});
}

export default Component;
