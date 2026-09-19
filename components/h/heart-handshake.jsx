import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/n/nq1haeo2l.css';
import '../../css/i/ie91ght0a.css';
import '../../css/z/z6gcuy8fu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="nq1haeo2l"/><path class="ie91ght0a"/><path class="z6gcuy8fu"/></g>`,
		"fallback": "hugeicons:heart-handshake",
	});
}

export default Component;
