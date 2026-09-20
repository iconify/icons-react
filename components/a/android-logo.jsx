import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/o/o6-c0p3sz.css';
import '../../css/s/sqej_ybkf.css';
import '../../css/b/bkohubccy.css';
import '../../css/o/o-oz_ujvl.css';
import '../../css/m/mmqj2ebcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="o6-c0p3sz"/><path class="sqej_ybkf"/><path class="bkohubccy"/><path class="o-oz_ujvl"/><path class="mmqj2ebcs"/></g>`,
		"fallback": "streamline-logos:android-logo",
	});
}

export default Component;
