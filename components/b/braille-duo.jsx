import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6awzg_xt.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vvfb87fxc.css';
import '../../css/i/i-4mr7bgr.css';
import '../../css/p/p9e_rabiq.css';
import '../../css/d/d3mapl9-w.css';
import '../../css/z/zek592bxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary z6awzg_xt"/><g class="dt0cm9dhy primary"><path class="vvfb87fxc"/><path class="i-4mr7bgr"/><path class="p9e_rabiq"/><path class="d3mapl9-w"/><path class="zek592bxj"/></g>`,
		"fallback": "iconaut:braille-duo",
	});
}

export default Component;
