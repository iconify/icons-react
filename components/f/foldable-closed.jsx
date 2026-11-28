import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/v-1ltacmn.css';
import '../../css/z/zzco34bep.css';
import '../../css/k/k9pxhyi7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="v-1ltacmn"/><path class="zzco34bep"/><path class="k9pxhyi7o"/></g>`,
		"fallback": "iconaut:foldable-closed",
	});
}

export default Component;
