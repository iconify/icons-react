import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/ssxi8fbrc.css';
import '../../css/v/vjzc1ab5s.css';
import '../../css/y/ypfmrgb_s.css';
import '../../css/z/z4fzfc_1c.css';
import '../../css/z/zdant3mfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ssxi8fbrc wm-shadow"/><path class="vjzc1ab5s wm-shadow"/><path class="ypfmrgb_s"/><path class="z4fzfc_1c"/><path class="zdant3mfm"/></g>`,
		"fallback": "withicons-brutal:disc",
	});
}

export default Component;
