import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/t7aepeb-o.css';
import '../../css/p/p2jam80zq.css';
import '../../css/g/ga40el12h.css';
import '../../css/x/xl2l7zq6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="t7aepeb-o"/><path class="p2jam80zq"/><path class="ga40el12h"/><path class="xl2l7zq6v"/></g>`,
		"fallback": "streamline-freehand:accounting-invoice-mail",
	});
}

export default Component;
