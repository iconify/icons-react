import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwa6rphlf.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/adlmouxhp.css';
import '../../css/t/tzmuo3b3g.css';
import '../../css/k/kezfubblm.css';
import '../../css/l/lc2dgyidq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwa6rphlf secondary"/><g class="dt0cm9dhy primary"><path class="adlmouxhp"/><path class="tzmuo3b3g"/><path class="kezfubblm"/><path class="lc2dgyidq"/></g>`,
		"fallback": "iconaut:cake-duo",
	});
}

export default Component;
