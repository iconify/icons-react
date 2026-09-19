import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3pbgcg6r.css';
import '../../css/e/e052tbbpy.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z3pbgcg6r"/><path class="e052tbbpy"/>`,
		"fallback": "fxemoji:down",
	});
}

export default Component;
