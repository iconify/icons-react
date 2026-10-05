import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/f/fwt4_36rp.css';
import '../../css/f/fqa1e_awf.css';
import '../../css/y/ykall_bto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="fwt4_36rp"/><path class="fqa1e_awf"/><path class="ykall_bto"/></g>`,
		"fallback": "matita:archive",
	});
}

export default Component;
