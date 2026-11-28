import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7nx-1xci.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fpsfjnbsx.css';
import '../../css/y/ybaa2ib6j.css';
import '../../css/u/uzchd2xdt.css';
import '../../css/f/f51c_v3qc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary t7nx-1xci"/><g class="dt0cm9dhy primary"><path class="fpsfjnbsx"/><path class="ybaa2ib6j"/><path class="uzchd2xdt"/><path class="f51c_v3qc"/></g>`,
		"fallback": "iconaut:backpack-duo",
	});
}

export default Component;
