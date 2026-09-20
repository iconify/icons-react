import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/su9dknbed.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k-xlr_blp.css';
import '../../css/b/bgg_hqo-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGKxcyRbQG" class="su9dknbed"/></defs><g class="ft5dv1b6b"><path class="k-xlr_blp"/><use href="#SVGKxcyRbQG"/><path class="bgg_hqo-b"/><use href="#SVGKxcyRbQG"/></g>`,
		"fallback": "stash:file-export-solid",
	});
}

export default Component;
