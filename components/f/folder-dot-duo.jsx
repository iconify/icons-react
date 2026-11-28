import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1d9yhbqx.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tgy8uab8v.css';
import '../../css/e/ebgx8jqmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1d9yhbqx secondary"/><g class="dt0cm9dhy primary"><path class="tgy8uab8v"/><path class="ebgx8jqmd"/></g>`,
		"fallback": "iconaut:folder-dot-duo",
	});
}

export default Component;
