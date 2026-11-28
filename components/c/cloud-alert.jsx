import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/da92j5b5b.css';
import '../../css/p/po22q14_l.css';
import '../../css/p/pupu9ccnn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="da92j5b5b"/><path class="po22q14_l"/><path class="pupu9ccnn"/></g>`,
		"fallback": "iconaut:cloud-alert",
	});
}

export default Component;
