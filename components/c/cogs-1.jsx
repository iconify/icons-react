import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rl15_ykyd.css';
import '../../css/g/g1gkzeb7t.css';
import '../../css/b/bndlp9bpz.css';

const viewBox = {"width":90,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rl15_ykyd"/><path class="g1gkzeb7t"/><path class="bndlp9bpz"/></g>`,
		"fallback": "glyphs-poly:cogs-1",
	});
}

export default Component;
