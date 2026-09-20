import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qf5klnkgl.css';
import '../../css/o/oqrcwk50g.css';
import '../../css/q/qwclmq-hc.css';
import '../../css/u/ua54wjybd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qf5klnkgl"/><path class="oqrcwk50g"/><path class="qwclmq-hc"/><path class="ua54wjybd"/></g>`,
		"fallback": "tdesign:dam-7",
	});
}

export default Component;
