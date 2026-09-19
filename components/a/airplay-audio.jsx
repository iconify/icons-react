import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o_8i6hn3s.css';
import '../../css/t/tvd51abuj.css';
import '../../css/x/xesg-7ktv.css';
import '../../css/q/q1mkbcbsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o_8i6hn3s"/><path class="tvd51abuj"/><path class="xesg-7ktv"/><path class="q1mkbcbsq"/></g>`,
		"fallback": "akar-icons:airplay-audio",
	});
}

export default Component;
