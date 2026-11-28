import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z_5v93bby.css';
import '../../css/x/x3nck_bwk.css';
import '../../css/x/xdkyl9b-v.css';
import '../../css/z/z8ixs7b-k.css';
import '../../css/o/or5248bfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="z_5v93bby"/><path class="x3nck_bwk"/><path class="xdkyl9b-v"/><path class="z8ixs7b-k"/><path class="or5248bfn"/></g>`,
		"fallback": "iconaut:certificate",
	});
}

export default Component;
