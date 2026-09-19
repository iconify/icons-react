import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yijx6hbni.css';
import '../../css/i/imsjpsbtj.css';
import '../../css/g/g1s8iiuoa.css';
import '../../css/r/r_9v_xb3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="yijx6hbni"/><path class="imsjpsbtj"/><path class="g1s8iiuoa"/><path class="r_9v_xb3d"/></g>`,
		"fallback": "grommet-icons:chrome",
	});
}

export default Component;
