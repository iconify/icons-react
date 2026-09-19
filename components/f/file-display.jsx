import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z-i1fsn1z.css';
import '../../css/i/i4aplac_p.css';
import '../../css/t/tt_wef58l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z-i1fsn1z"/><path class="i4aplac_p"/><path class="tt_wef58l"/></g>`,
		"fallback": "icon-park-outline:file-display",
	});
}

export default Component;
