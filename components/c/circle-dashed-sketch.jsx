import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xzr1ikboy.css';
import '../../css/r/re50tebqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="xzr1ikboy"/><path class="re50tebqp"/></g>`,
		"fallback": "withicons:circle-dashed-sketch",
	});
}

export default Component;
