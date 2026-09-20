import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bgzt_ibix.css';
import '../../css/z/zuqx6186b.css';
import '../../css/f/flah-ib-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="bgzt_ibix"/><path class="zuqx6186b"/><path class="flah-ib-u"/></g>`,
		"fallback": "streamline-freehand:cellular-network-wifi-3g",
	});
}

export default Component;
