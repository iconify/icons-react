import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/g9vy49b-z.css';
import '../../css/q/q2wvs4bqc.css';
import '../../css/v/vlx6jfb0c.css';
import '../../css/r/rnub8cchp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="g9vy49b-z"/><path class="q2wvs4bqc wm-a"/><path class="vlx6jfb0c wm-k"/><path class="rnub8cchp wm-a"/></g>`,
		"fallback": "withicons:bread-sketch",
	});
}

export default Component;
