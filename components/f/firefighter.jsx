import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j4sh7-bnd.css';
import '../../css/m/mmp_-hbpz.css';
import '../../css/h/hitghubfs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j4sh7-bnd"/><path class="mmp_-hbpz"/><path class="hitghubfs"/></g>`,
		"fallback": "fluent-emoji-high-contrast:firefighter",
	});
}

export default Component;
