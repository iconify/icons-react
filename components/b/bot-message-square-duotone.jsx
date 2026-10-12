import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z8_nq2b8u.css';
import '../../css/n/nshcldb8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z8_nq2b8u"/><path class="nshcldb8a"/></g>`,
		"fallback": "lucide-extended:bot-message-square-duotone",
	});
}

export default Component;
