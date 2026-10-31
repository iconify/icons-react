import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uz103-b6l.css';
import '../../css/c/c1thob-9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uz103-b6l"/><path class="c1thob-9r"/></g>`,
		"fallback": "coolicons:git-commit-bulk-round",
	});
}

export default Component;
