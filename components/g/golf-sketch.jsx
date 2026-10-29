import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/io-82l7iw.css';
import '../../css/h/hcqrxvbji.css';
import '../../css/z/z0je37bis.css';
import '../../css/d/dj8dvkbjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="io-82l7iw"/><path class="hcqrxvbji wm-k"/><path class="wm-k z0je37bis"/><path class="dj8dvkbjq wm-a"/></g>`,
		"fallback": "withicons:golf-sketch",
	});
}

export default Component;
