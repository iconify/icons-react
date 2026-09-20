import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z0vefwbox.css';
import '../../css/j/jm2s9ur2m.css';
import '../../css/b/bm30rmb0z.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="z0vefwbox"/><path class="jm2s9ur2m"/><path class="bm30rmb0z"/></g>`,
		"fallback": "skill-icons:django",
	});
}

export default Component;
