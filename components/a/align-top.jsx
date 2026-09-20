import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mg7aqnbsf.css';
import '../../css/i/i8979pb_i.css';
import '../../css/m/m0f9xo_pb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mg7aqnbsf"/><rect transform="rotate(-90 6 20)" class="i8979pb_i"/><rect transform="rotate(-90 14 16)" class="m0f9xo_pb"/></g>`,
		"fallback": "majesticons:align-top",
	});
}

export default Component;
