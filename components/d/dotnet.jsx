import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z9abznb2d.css';
import '../../css/c/cxs7zx-4g.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="z9abznb2d"/><path class="cxs7zx-4g"/></g>`,
		"fallback": "skill-icons:dotnet",
	});
}

export default Component;
