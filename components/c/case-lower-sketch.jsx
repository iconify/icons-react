import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hisprwbpw.css';
import '../../css/j/jiv6tp4bc.css';
import '../../css/p/p2ghj7bdf.css';
import '../../css/r/rn1vb_b2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="hisprwbpw wm-k"/><path class="jiv6tp4bc wm-a"/><path class="p2ghj7bdf wm-k"/><path class="rn1vb_b2z wm-a"/></g>`,
		"fallback": "withicons:case-lower-sketch",
	});
}

export default Component;
