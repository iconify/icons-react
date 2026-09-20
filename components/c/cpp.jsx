import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dwpiq9ban.css';
import '../../css/a/a139p7rye.css';
import '../../css/n/nz0lp3ozz.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="dwpiq9ban"/><path class="a139p7rye"/><path class="nz0lp3ozz"/></g>`,
		"fallback": "skill-icons:cpp",
	});
}

export default Component;
