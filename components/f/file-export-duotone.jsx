import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/su9dknbed.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p4fy0sbhc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/b/bgg_hqo-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGKxcyRbQG" class="su9dknbed"/></defs><g class="ft5dv1b6b"><path class="p4fy0sbhc"/><use href="#SVGKxcyRbQG" class="mc2zb0bvp"/><use href="#SVGKxcyRbQG"/><path class="bgg_hqo-b"/></g>`,
		"fallback": "stash:file-export-duotone",
	});
}

export default Component;
