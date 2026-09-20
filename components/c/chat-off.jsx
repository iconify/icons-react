import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5xdmn.css';
import '../../css/h/hmd6rr.css';
import '../../css/z/zxndow.css';
import '../../css/d/dxl7-q.css';
import '../../css/r/ruuz6o.css';
import '../../css/k/kivm5z.css';
import '../../css/o/oxx-om.css';
import '../../css/u/ux4wzr.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-70.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGNh0Fjeyi"><path class="c5xdmn hmd6rr zxndow"/><path class="c5xdmn dxl7-q zxndow"/><path class="c5xdmn ruuz6o zxndow"/><path class="c5xdmn kivm5z zxndow"/><path class="c5xdmn oxx-om ux4wzr"/></mask></defs><path mask="url(#SVGNh0Fjeyi)" class="botfzx"/><path class="c5xdmn gd_4-q ux4wzr"/>`,
		"fallback": "line-md:chat-off",
	});
}

export default Component;
