import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sgiqt0f5l.css';
import '../../css/j/jcub-hbnd.css';
import '../../css/h/hmjcn7mey.css';
import '../../css/w/wg1gttbxr.css';
import '../../css/n/nb2d00wvu.css';
import '../../css/m/moyc_7bvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="sgiqt0f5l wm-shadow"/><path class="jcub-hbnd"/><path class="hmjcn7mey"/><path class="wg1gttbxr"/><path class="nb2d00wvu"/><path class="moyc_7bvn"/></g>`,
		"fallback": "withicons-retro:baguette",
	});
}

export default Component;
