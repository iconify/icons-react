import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/f/fb5yvixpf.css';
import '../../css/w/w16g_ebrf.css';
import '../../css/s/sjap5vbbd.css';
import '../../css/m/m32bgrbpv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="fb5yvixpf"/><path class="w16g_ebrf"/><path class="sjap5vbbd"/><path class="m32bgrbpv"/></g>`,
		"fallback": "streamline-plump-color:email-attachment-document",
	});
}

export default Component;
