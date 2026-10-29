import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fuy23-brh.css';
import '../../css/i/irtzjc7wf.css';
import '../../css/v/vbtrpvbhv.css';
import '../../css/u/ukna4qm-o.css';
import '../../css/j/jzul1pbjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="fuy23-brh wm-k"/><path class="irtzjc7wf wm-a"/><path class="vbtrpvbhv wm-shadow"/><path class="ukna4qm-o wm-k"/><path class="jzul1pbjt wm-a"/></g>`,
		"fallback": "withicons:cactus-engrave",
	});
}

export default Component;
