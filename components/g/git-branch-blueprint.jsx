import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/t/t4j37yb9a.css';
import '../../css/e/e1yc9ublt.css';
import '../../css/t/t218te2ox.css';
import '../../css/s/s2k53ac7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="t4j37yb9a wm-deco"/><path class="e1yc9ublt wm-deco"/><path class="t218te2ox wm-deco"/><path class="s2k53ac7q"/></g>`,
		"fallback": "withicons:git-branch-blueprint",
	});
}

export default Component;
