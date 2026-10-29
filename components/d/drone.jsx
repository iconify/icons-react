import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/ye8su7bgk.css';
import '../../css/u/uadpk7bcx.css';
import '../../css/c/c3dodzb5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-k ye8su7bgk"/><path class="uadpk7bcx wm-a"/><path class="c3dodzb5m"/></g>`,
		"fallback": "withicons-bauhaus:drone",
	});
}

export default Component;
