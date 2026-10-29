import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k5c7wwyuh.css';
import '../../css/d/dbxivir6k.css';
import '../../css/x/xcez03_th.css';
import '../../css/j/jjivkrbpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="k5c7wwyuh"/><path class="dbxivir6k wm-a"/><path class="wm-a xcez03_th"/><path class="jjivkrbpv"/></g>`,
		"fallback": "withicons:cricket-duo",
	});
}

export default Component;
