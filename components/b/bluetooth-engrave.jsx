import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/w78uambvl.css';
import '../../css/g/gn5f4mpcl.css';
import '../../css/q/qkacyrwvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="w78uambvl"/><path class="gn5f4mpcl wm-shadow"/><path class="qkacyrwvc"/></g>`,
		"fallback": "withicons:bluetooth-engrave",
	});
}

export default Component;
