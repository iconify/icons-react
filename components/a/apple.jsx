import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/f/fvr3jsble.css';
import '../../css/g/gbq5i-bmx.css';
import '../../css/s/sh51cwb0x.css';
import '../../css/p/pdike1b1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="fvr3jsble wm-shadow"/><path class="gbq5i-bmx wm-shadow"/><path class="sh51cwb0x"/><path class="pdike1b1u"/></g>`,
		"fallback": "withicons-brutal:apple",
	});
}

export default Component;
