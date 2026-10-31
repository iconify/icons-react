import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/icva-acmt.css';
import '../../css/r/rq4e84erx.css';
import '../../css/y/ytde_dbbu.css';
import '../../css/v/v0x6_kb5l.css';
import '../../css/h/hce54acyd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="icva-acmt wm-shadow"/><path class="rq4e84erx wm-shadow"/><path class="ytde_dbbu"/><path class="v0x6_kb5l"/><path class="hce54acyd"/></g>`,
		"fallback": "withicons-brutal:cake",
	});
}

export default Component;
