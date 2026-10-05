import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/r/rojlq5bdw.css';
import '../../css/p/ppdpuzbds.css';
import '../../css/p/p8xca0b7c.css';
import '../../css/v/vu88byegq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="rojlq5bdw"/><path class="ppdpuzbds"/><path class="p8xca0b7c"/><path class="vu88byegq"/></g>`,
		"fallback": "matita:align-center",
	});
}

export default Component;
