import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fw9v87b4c.css';
import '../../css/m/mfknfxuzn.css';
import '../../css/u/uisx9ybeb.css';
import '../../css/h/hj2a72bep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="fw9v87b4c"/><path class="mfknfxuzn"/><path class="uisx9ybeb"/><path class="hj2a72bep"/></g>`,
		"fallback": "streamline-freehand:begging-giving",
	});
}

export default Component;
