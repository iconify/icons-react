import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uew6tl-xy.css';
import '../../css/s/s5s3fefsf.css';
import '../../css/s/si3inpc3v.css';
import '../../css/i/i70bgdbfl.css';
import '../../css/s/shu3xdl9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="uew6tl-xy"/><path class="s5s3fefsf"/><path class="si3inpc3v"/><path class="i70bgdbfl"/><circle class="shu3xdl9q"/></g>`,
		"fallback": "solar:bluetooth-circle-linear",
	});
}

export default Component;
