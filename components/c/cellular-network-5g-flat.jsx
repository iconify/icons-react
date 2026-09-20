import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wsbv54biw.css';
import '../../css/l/lopsphb2b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="wsbv54biw"/><path class="lopsphb2b"/></g>`,
		"fallback": "streamline-color:cellular-network-5g-flat",
	});
}

export default Component;
