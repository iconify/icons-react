import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k-xlr_blp.css';
import '../../css/s/su9dknbed.css';
import '../../css/b/bgg_hqo-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k-xlr_blp"/><path class="su9dknbed"/><path class="bgg_hqo-b"/></g>`,
		"fallback": "stash:file-export",
	});
}

export default Component;
