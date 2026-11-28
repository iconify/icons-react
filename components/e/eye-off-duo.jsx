import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ab-gq9bkn.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q-nep3d5v.css';
import '../../css/v/vz-zaig0w.css';
import '../../css/e/eo_76b8fd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ab-gq9bkn secondary"/><g class="dt0cm9dhy primary"><path class="q-nep3d5v"/><path class="vz-zaig0w"/><path class="eo_76b8fd"/></g>`,
		"fallback": "iconaut:eye-off-duo",
	});
}

export default Component;
