import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pw0_36t0y.css';
import '../../css/f/fphw-ybtw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pw0_36t0y"/><path class="fphw-ybtw"/></g>`,
		"fallback": "glyphs:bookmarks-outline",
	});
}

export default Component;
