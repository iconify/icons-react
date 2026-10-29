import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/l1gqfjvim.css';
import '../../css/v/v2g7flb6x.css';
import '../../css/u/uroqyvbfx.css';
import '../../css/j/jm5tno_bu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="l1gqfjvim"/><path class="v2g7flb6x wm-a"/><path class="uroqyvbfx wm-k"/><path class="jm5tno_bu wm-a"/></g>`,
		"fallback": "withicons:aperture-sketch",
	});
}

export default Component;
