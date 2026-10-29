import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/ssq6xfbfm.css';
import '../../css/s/s9a35_b4n.css';
import '../../css/l/l8un0eb3f.css';
import '../../css/o/o16wlryvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ssq6xfbfm"/><path class="s9a35_b4n wm-a"/><path class="l8un0eb3f wm-k"/><path class="o16wlryvs wm-a"/></g>`,
		"fallback": "withicons:crayon-sketch",
	});
}

export default Component;
