import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezk407e_p.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/c/c9g5684_i.css';
import '../../css/p/p-jxp4bsr.css';
import '../../css/j/jauoic6ia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ezk407e_p"/><g class="xtpeb-edw"><path class="c9g5684_i"/><path class="p-jxp4bsr"/><path class="jauoic6ia"/></g>`,
		"fallback": "solar:dumbbell-large-minimalistic-bold-duotone",
	});
}

export default Component;
