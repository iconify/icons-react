import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4s214bcx.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b8-5qe_oc.css';
import '../../css/k/kd__4fbzs.css';
import '../../css/x/xtestkbmg.css';
import '../../css/x/x9i7hfb7g.css';
import '../../css/f/f3v4zubwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f4s214bcx secondary"/><g class="dt0cm9dhy primary"><path class="b8-5qe_oc"/><path class="kd__4fbzs"/><path class="xtestkbmg"/><path class="x9i7hfb7g"/><path class="f3v4zubwu"/></g>`,
		"fallback": "iconaut:chart-network-duo",
	});
}

export default Component;
