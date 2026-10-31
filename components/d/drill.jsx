import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/iv8ft6b8h.css';
import '../../css/p/p8e5embvq.css';
import '../../css/b/bwvgseb2w.css';
import '../../css/j/jp579lbrs.css';
import '../../css/a/af-bi763y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="iv8ft6b8h wm-shadow"/><path class="p8e5embvq wm-shadow"/><path class="bwvgseb2w"/><path class="jp579lbrs"/><path class="af-bi763y"/></g>`,
		"fallback": "withicons-brutal:drill",
	});
}

export default Component;
