import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/la6z8h06d.css';
import '../../css/t/tv9524b-g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="la6z8h06d"/><path class="tv9524b-g"/></g>`,
		"fallback": "codicon:file-binary",
	});
}

export default Component;
