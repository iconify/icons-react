import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fp_zpjb1t.css';
import '../../css/v/vjkfxtbal.css';
import '../../css/c/cun0_vbmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="fp_zpjb1t"/><path class="vjkfxtbal"/><path class="cun0_vbmg"/></g>`,
		"fallback": "streamline-freehand:instrument-accordian",
	});
}

export default Component;
