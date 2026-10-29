import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xgfh04b0u.css';
import '../../css/f/fvp0h1bsk.css';
import '../../css/m/miknsv_yb.css';
import '../../css/a/ain1tnbxt.css';
import '../../css/s/sy7kpcbuo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="xgfh04b0u"/><path class="fvp0h1bsk wm-s"/><path class="miknsv_yb wm-s"/><path class="ain1tnbxt"/><path class="sy7kpcbuo wm-a"/></g>`,
		"fallback": "withicons:image-plus-duo",
	});
}

export default Component;
