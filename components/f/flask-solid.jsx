import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-l1pd0_w.css';
import '../../css/a/aghnw_bgv.css';
import '../../css/l/l_1yt4cmi.css';
import '../../css/m/mg82_uzpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h-l1pd0_w"><path clip-rule="evenodd" class="aghnw_bgv"/><path class="l_1yt4cmi"/><path clip-rule="evenodd" class="mg82_uzpj"/></g>`,
		"fallback": "iconoir:flask-solid",
	});
}

export default Component;
