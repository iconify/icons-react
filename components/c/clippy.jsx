import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hecoe2k9p.css';
import '../../css/a/a9n-jtbhn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hecoe2k9p"/><path class="a9n-jtbhn"/></g>`,
		"fallback": "codicon:clippy",
	});
}

export default Component;
