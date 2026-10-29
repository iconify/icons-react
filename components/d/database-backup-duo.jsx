import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wgaq2_nok.css';
import '../../css/y/ydg910bfg.css';
import '../../css/r/rnsc04beb.css';
import '../../css/y/y95393_dl.css';
import '../../css/w/wci8o2bvn.css';
import '../../css/d/dx8clgbog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="wgaq2_nok"/><path class="wm-s ydg910bfg"/><path class="rnsc04beb wm-s"/><path class="y95393_dl"/><path class="wci8o2bvn"/><path class="dx8clgbog wm-a"/></g>`,
		"fallback": "withicons:database-backup-duo",
	});
}

export default Component;
