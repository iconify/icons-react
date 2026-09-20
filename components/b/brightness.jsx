import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n8wstgbkt.css';
import '../../css/q/q1m15dbht.css';
import '../../css/i/i4sl-ib2t.css';
import '../../css/n/n5nl6mb4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n8wstgbkt"/><circle class="q1m15dbht"/><path class="i4sl-ib2t"/><circle class="n5nl6mb4o"/></g>`,
		"fallback": "tdesign:brightness",
	});
}

export default Component;
