import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jyjex658h.css';
import '../../css/z/z_2gvg9_c.css';
import '../../css/d/dmh96mbbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="jyjex658h wm-a"/><path class="wm-k z_2gvg9_c"/><path class="dmh96mbbx wm-a"/></g>`,
		"fallback": "withicons:avatar-man-beard-sketch",
	});
}

export default Component;
