import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydl_dbbtq.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jre_dac-l.css';
import '../../css/z/z__q3xrym.css';
import '../../css/w/w59mli1dv.css';
import '../../css/s/s6hxn7bnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary ydl_dbbtq"/><g class="dt0cm9dhy primary"><path class="jre_dac-l"/><path class="z__q3xrym"/><path class="w59mli1dv"/><path class="s6hxn7bnk"/></g>`,
		"fallback": "iconaut:car-front-duo",
	});
}

export default Component;
