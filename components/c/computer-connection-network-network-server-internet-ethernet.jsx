import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qdoyozbyj.css';
import '../../css/w/wqpa7-b3w.css';
import '../../css/i/i90ppnbxa.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="qdoyozbyj"/><circle class="wqpa7-b3w"/><path class="i90ppnbxa"/></g>`,
		"fallback": "streamline:computer-connection-network-network-server-internet-ethernet",
	});
}

export default Component;
