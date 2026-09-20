import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h38z5cbna.css';
import '../../css/t/twkmrdbgm.css';
import '../../css/f/f13etxlhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h38z5cbna"/><path class="twkmrdbgm"/><path class="f13etxlhi"/></g>`,
		"fallback": "tabler:device-audio-tape",
	});
}

export default Component;
