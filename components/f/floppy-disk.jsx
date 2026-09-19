import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/um34ubtfl.css';
import '../../css/o/odpe3tbca.css';
import '../../css/i/iostzby_w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="um34ubtfl"/><path class="odpe3tbca"/><path class="iostzby_w"/></g>`,
		"fallback": "at-icons:floppy-disk",
	});
}

export default Component;
