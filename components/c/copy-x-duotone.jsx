import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pn2l2mwhp.css';
import '../../css/y/y2-q-oasx.css';
import '../../css/y/ytv39-yuk.css';
import '../../css/y/y9gl3lbmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pn2l2mwhp"/><path class="y2-q-oasx"/><path class="ytv39-yuk"/><path class="y9gl3lbmo"/></g>`,
		"fallback": "lucide-extended:copy-x-duotone",
	});
}

export default Component;
