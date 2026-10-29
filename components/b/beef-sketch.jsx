import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jzy9u_b0c.css';
import '../../css/n/n7fxuac_e.css';
import '../../css/g/g3nhtmbdu.css';
import '../../css/z/z70t8ccqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="jzy9u_b0c"/><path class="n7fxuac_e wm-a"/><path class="g3nhtmbdu wm-k"/><path class="wm-a z70t8ccqi"/></g>`,
		"fallback": "withicons:beef-sketch",
	});
}

export default Component;
