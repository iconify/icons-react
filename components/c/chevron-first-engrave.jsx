import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/v_-z67bjr.css';
import '../../css/f/fbtsz5b1h.css';
import '../../css/r/ra8smr1ma.css';
import '../../css/e/egx1okpdi.css';
import '../../css/c/chfexdi1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="v_-z67bjr wm-k"/><path class="fbtsz5b1h wm-a"/><path class="ra8smr1ma wm-shadow"/><path class="egx1okpdi wm-k"/><path class="chfexdi1f wm-a"/></g>`,
		"fallback": "withicons:chevron-first-engrave",
	});
}

export default Component;
